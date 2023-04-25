import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './UnityContainer.module.css'


const UnityContainer = () => {
  // const { unityProvider } = useUnityContext({
  //   // loaderUrl: "./build/UnityBuild.loader.js",
  //   // dataUrl: "./build/UnityBuild.data.unityweb",
  //   // frameworkUrl: "./build/UnityBuild.framework.js.unityweb",
  //   // codeUrl: "./build/UnityBuild.wasm.unityweb",
  //   // "../../../public/build/Build/Min.data.gz",
  //   loaderUrl: "build/Min.loader.js",
  //   dataUrl: "build/webgl.data",
  //   frameworkUrl: "build/build.framework.js",
  //   codeUrl: "build/build.wasm",
  //   webglContextAttributes: {
  //     preserveDrawingBuffer: true
  //   }
  // });
  
  return (
    // <Unity unityProvider={unityProvider} className={styles.UnityDiv} />
    <iframe src='http://graphon/' style={{display: 'block', width: "100%", height: '99vh', border: 'none'}}></iframe>
  )
}

export default UnityContainer