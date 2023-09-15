import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpacConfig';
import { IEnv } from 'config/build/types/config';

export default (env: IEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;


  const paths = {
    entry: path.resolve(__dirname, 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev
  });

  return config;
};