import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
     alias : {
        "@" : path.resolve(__dirname , "./src"),
        "@pages" : path.resolve(__dirname , "./src/pages"),
        "@comp" : path.resolve(__dirname , "./src/components" ),
        "@css"  : path.resolve(__dirname , "./src/assets/css" ),
        "@hooks" : path.resolve(__dirname , "./src/hooks"),
        "@context" : path.resolve(__dirname , "./src/context"),
        "@functions" : path.resolve(__dirname , "./src/functions")

    }
  }
})
