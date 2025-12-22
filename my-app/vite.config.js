import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'unsafe-none',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React and routing
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Firebase
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          // Courses chunk
          'courses': [
            './src/components/courses/Html',
            './src/components/courses/Css',
            './src/components/courses/Javascript',
            './src/components/courses/Node',
            './src/components/courses/React',
            './src/components/courses/Mongodb',
            './src/components/courses/Aws',
            './src/components/courses/Azure',
            './src/components/courses/Gcp',
            './src/components/courses/Flutter',
            './src/components/courses/Python',
            './src/components/courses/Django',
            './src/components/courses/Flask',
            './src/components/courses/Java',
            './src/components/courses/Spring',
            './src/components/courses/Hibernate',
            './src/components/courses/Ml',
            './src/components/courses/Dl',
            './src/components/courses/Ai',
            './src/components/courses/C',
            './src/components/courses/C++',
            './src/components/courses/Php',
            './src/components/courses/Dbms',
            './src/components/courses/Sql'
          ],
          // Assignments chunk
          'assignments': [
            './src/components/Assignment/Mlassign',
            './src/components/Assignment/Dlassign',
            './src/components/Assignment/Aiassign',
            './src/components/Assignment/Flutterassign',
            './src/components/Assignment/Pyassign',
            './src/components/Assignment/Djassign',
            './src/components/Assignment/Flaskassign',
            './src/components/Assignment/Javaassign',
            './src/components/Assignment/Springassign',
            './src/components/Assignment/Hiberassign',
            './src/components/Assignment/Htmlassign',
            './src/components/Assignment/Cssassign',
            './src/components/Assignment/Jsassign',
            './src/components/Assignment/Nodeassign',
            './src/components/Assignment/Reactassign',
            './src/components/Assignment/Mongodbassign',
            './src/components/Assignment/Awsassign',
            './src/components/Assignment/Azureassign',
            './src/components/Assignment/Gcpassign',
            './src/components/Assignment/Cassign',
            './src/components/Assignment/Cppassign',
            './src/components/Assignment/Phpassign',
            './src/components/Assignment/Dbmsassign',
            './src/components/Assignment/Sqlassign'
          ],
          // Footer pages chunk
          'footer-pages': [
            './src/components/footer/About',
            './src/components/footer/Careers',
            './src/components/footer/Press',
            './src/components/footer/Affiliates',
            './src/components/footer/Blog',
            './src/components/footer/Study',
            './src/components/footer/Practice',
            './src/components/footer/Privacy',
            './src/components/footer/Terms',
            './src/components/footer/Cookie',
            './src/components/footer/FAQ'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase the warning limit
  }
})
