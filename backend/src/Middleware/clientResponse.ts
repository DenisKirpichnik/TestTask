export default (data: any, err: any = null) => ({
  data,
  isSuccess: data !== null,
  error: err,
});
