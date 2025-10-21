# Deployment Guide

## Fixed TypeScript Errors

The following TypeScript errors have been resolved:

### 1. Unused Parameters
- **Router**: Fixed unused `from` parameter in `router.beforeEach` by prefixing with underscore
- **Components**: Fixed unused variables in v-for loops by prefixing with underscore
- **Header**: Removed unused `computed` import

### 2. AOS (Animate On Scroll) Type Issues
- **Solution**: Used type assertion `(window as any).AOS` to bypass TypeScript strict checking
- **Alternative**: Added global type declarations in `src/types/global.d.ts`

### 3. Vite Configuration Issues
- **Path Module**: Replaced `path` import with `node:url` for better ESM compatibility
- **__dirname**: Replaced `__dirname` with `import.meta.url` for ESM modules
- **Node Types**: Added `@types/node` as dev dependency

## Build Commands

### Development Build (with type checking)
```bash
npm run build
```

### Production Build (faster, no type checking)
```bash
npm run build:prod
```

## Netlify Deployment

For Netlify deployment, you can use either:

1. **With Type Checking** (recommended for development):
   ```bash
   npm run build
   ```

2. **Without Type Checking** (faster for production):
   ```bash
   npm run build:prod
   ```

## Build Configuration

- **Base Directory**: `/opt/build/repo/frontend`
- **Build Command**: `npm run build` or `npm run build:prod`
- **Publish Directory**: `/opt/build/repo/frontend/dist`

## Environment Variables

No environment variables are required for this build.

## Troubleshooting

If you encounter similar TypeScript errors in the future:

1. **Unused Variables**: Prefix with underscore (`_variable`)
2. **Missing Types**: Install required `@types/*` packages
3. **Global Objects**: Use type assertions or add proper type declarations
4. **Node.js APIs**: Use ESM-compatible imports (`node:url` instead of `path`)

## Performance Tips

- Use `npm run build:prod` for faster production builds
- Consider using `npm ci` instead of `npm install` in CI/CD for faster, more reliable builds
- Enable build caching in your deployment platform
