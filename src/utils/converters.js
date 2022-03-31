
export const profitToProcent = (profitFloat) => {
  const arr = profitFloat.toFixed(3).toString().split('.')[1].split('');
  return arr[0] + arr[1] + '.' + arr[2] + '%';
};