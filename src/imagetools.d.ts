declare module "*?w=*&format=*&as=srcset" {
  const srcSet: string;
  export default srcSet;
}

declare module "*?w=*&format=*" {
  const url: string;
  export default url;
}