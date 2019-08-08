import { UserSession, AppConfig } from 'blockstack'

export default function (context) {
  const appConfig = new AppConfig(['store_write', 'publish_data'])
  const userSession = new UserSession({ appConfig })
  context.userSession = userSession ? userSession : redirect('/')
}
