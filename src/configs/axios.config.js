export default function ({ $axios, $config }) {
  $axios.setBaseURL($config.publicPath);
}
