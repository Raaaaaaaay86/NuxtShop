export default async function ({ route, store, redirect }, actionPath) {
  const orderId = route.params.id;
  const success = await store.dispatch(actionPath, orderId);
  if (!success) return redirect('/');
  return true;
}
