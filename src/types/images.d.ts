declare module '*.png' {
  const value: number; // React Native uses numbers for static image resources
  export default value;
}
