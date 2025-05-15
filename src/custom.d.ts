declare module "*.json" {
  const value: any; // You can be more specific if you know the JSON structure
  export default value;
}