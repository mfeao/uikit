/// <reference types="react-scripts" />

declare module '@package' {
  export * from '~/components';
}

declare module '@dist/cjs' {
  export * from '@package';
}

declare module '@dist/esm' {
  export * from '@package';
}
