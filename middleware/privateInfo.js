/* eslint-disable func-names */
export default function ({ redirect }) {
  if (process.server) {
    console.log('Redirect to /');
    redirect('/');
  }
}
