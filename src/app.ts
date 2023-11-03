import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import uploadRouter from '~/api/upload/upload.route'
import serverApollo from './apollo'

const server = async () => {
  const app = express()

  app.use(cors())
  app.use(
    express.json({
      limit: '20mb'
    })
  )

  app.use(
    express.urlencoded({
      extended: true
    })
  )

  await serverApollo.start()

  app.use('/api/upload', uploadRouter)

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(serverApollo, {
      context: async ({ req }) => {
        const token = req.headers.authorization
        return {
          token
        }
      }
    })
  )

  app.listen(8080, () => {
    console.log('Running a GraphQL API server at http://localhost:8080/graphql')
  })
}

export default server
