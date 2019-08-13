import { UserSession, AppConfig } from 'blockstack'

export default function ({ store }) {
  // If nuxt generate, pass this middleware
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });
  // if(!userSession) {
  //   return redirect('/');
  // } else {
    store.commit('SET_USER', userSession);
  // }
}