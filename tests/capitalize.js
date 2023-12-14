function capitalize(string) {
  const arr = string.split("");

  return arr[0].toUpperCase() + string.slice(1);
}

export default capitalize;
