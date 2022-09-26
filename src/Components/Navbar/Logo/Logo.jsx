import React from "react";

const Logo = (props) => {
  return (
    <div>
      <svg
        width="190"
        height="26"
        viewBox="0 0 190 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.6311 4.12946C28.1885 4.12946 29.4344 5.20005 29.5902 6.57652L64.6311 0.611816L61.2049 10.2471L59.6475 10.7059L55.2869 11.9295L52.3279 12.5412L56.0656 7.6471L36.7541 13.7648L33.6393 11.3177L10.2787 20.8001L32.5492 18.5059L30.0574 21.5648L44.6967 18.5059L49.5246 17.4354L48.4344 19.2707L47.1885 21.4118L52.1721 20.0354L58.5574 18.353L57.4672 21.2589L56.2213 24.9295H0L7.0082 15.9059L11.9918 9.63534L15.8852 8.87063V8.41181C15.8852 6.8824 17.1311 5.50593 18.8443 5.50593C20.4016 5.50593 21.4918 6.42357 21.8033 7.80005L23.6721 7.49416V7.03534C23.6721 5.50593 24.918 4.12946 26.6311 4.12946ZM28.5 7.18828C28.5 8.25887 27.5656 9.02358 26.6311 9.02358C25.6967 9.02358 24.7623 8.25887 24.7623 7.34122L28.5 6.72946V7.18828ZM20.8689 8.56475C20.8689 9.63534 19.9344 10.4 19 10.4C18.0656 10.4 17.1311 9.63534 17.1311 8.71769L20.8689 8.10593V8.56475Z"
          fill={props.color1}
        ></path>
        <path
          d="M67.4344 24.9294V24.3176H65.7213V23.7058H65.0983V23.0941H64.4754V22.4823H63.8524V21.4117H63.2295V16.9764H63.8524V15.9058H64.4754V15.447H65.0983V14.8352H65.7213V14.2235H67.4344V13.7646H70.2377V14.2235H71.9508V14.8352H72.5737V15.9058H73.1967V16.5176H73.8197V17.1294H71.4836V16.5176H70.8606V15.9058H69.7705V15.447H68.0574V16.0588H66.9672V16.6705H66.3442V17.2823H65.7213V18.3529H65.0983V20.647H65.7213V21.7176H66.3442V22.3294H66.9672V22.9411H68.0574V23.5529H69.7705V22.9411H70.8606V22.3294H71.4836V21.7176H73.8197V22.3294H73.1967V22.9411H72.5737V24.0117H71.9508V24.6235H70.2377V24.9294H67.4344Z"
          fill={props.color2}
        ></path>
        <path
          d="M75.2212 24.9294V13.7646H81.4507V14.2235H82.0737V14.8352H82.5409V15.447H83.1638V18.1999H82.5409V18.8117H81.9179V19.4235H81.295V20.0352H79.5818V20.647H80.2048V21.2588H80.8278V21.8705H81.4507V22.4823H82.0737V23.0941H82.5409V23.7058H83.1638V24.3176H83.7868V24.9294H84.4097H82.0737V24.3176H81.4507V23.7058H80.8278V23.0941H80.2048V22.4823H79.5818V21.8705H78.9589V21.2588H78.3359V20.647H77.713V20.0352H77.09V19.4235H76.4671V24.9294H75.2212ZM80.8278 18.1999V17.5882H81.4507V15.9058H80.8278V15.447H76.7786V18.1999H80.8278Z"
          fill={props.color2}
        ></path>
        <path
          d="M88.4588 24.9294V24.3176H86.7457V23.7058H86.1228V23.0941H85.4998V22.4823H84.8769V21.4117H84.2539V16.9764H84.8769V15.9058H85.4998V15.447H86.1228V14.8352H86.7457V14.2235H88.4588V13.7646H91.2621V14.2235H92.9752V14.8352H93.4424V15.447H94.0654V16.0588H94.6883V17.1294H95.3113V21.5646H94.6883V22.6352H94.0654V23.247H93.4424V23.8588H92.8195V24.4705H91.1064V24.9294H88.4588ZM90.6392 23.247V22.6352H91.7293V22.0235H92.3523V21.4117H92.9752V20.3411H93.4424V18.047H92.8195V16.9764H92.1965V16.3646H91.5736V15.7529H90.4834V15.447H88.7703V16.0588H87.6801V16.6705H87.2129V17.2823H86.59V18.3529H85.967V20.647H86.59V21.7176H87.2129V22.3294H87.8359V22.9411H88.926V23.5529H90.6392V23.247Z"
          fill={props.color2}
        ></path>
        <path
          d="M100.607 24.9294V24.3176H98.8937V23.7058H98.2707V23.0941H97.6478V22.4823H97.0248V21.4117H96.5576V16.9764H97.1806V15.9058H97.8035V15.447H98.4265V14.8352H99.0494V14.2235H100.763V13.7646H103.566V14.2235H105.279V14.8352H105.902V15.9058H106.525V16.5176H107.148V17.1294H104.812V16.5176H104.189V15.9058H102.787V15.447H101.074V16.0588H99.9838V16.6705H99.3609V17.2823H98.7379V18.3529H98.115V20.647H98.7379V21.7176H99.3609V22.3294H99.9838V22.9411H101.074V23.5529H102.787V22.9411H103.877V22.3294H104.5V21.7176H106.836V22.3294H106.213V22.9411H105.59V24.0117H104.967V24.6235H103.254V24.9294H100.607Z"
          fill={props.color2}
        ></path>
        <path
          d="M110.73 24.9294V24.3176H109.639V23.7058H109.017V23.0941H108.394V22.0235H110.107V22.6352H110.73V23.247H113.533V22.6352H114.156V20.9529H113.533V20.3411H112.91V19.7294H111.197V19.1176H109.484V18.8117H109.017V18.1999H108.394V15.447H109.017V14.8352H109.639V14.2235H110.262V13.7646H114.312V14.2235H114.935V14.8352H115.246V15.9058H113.533V15.447H110.73V16.0588H110.107V17.7411H111.197V18.3529H112.91V18.8117H114V19.4235H115.246V20.4941H115.869V23.247H115.246V23.8588H114.623V24.4705H113.533V24.9294H110.73Z"
          fill={props.color2}
        ></path>
        <path
          d="M153.09 24.9294V24.3176H151.377V23.7058H150.754V23.0941H150.131V22.4823H149.508V21.4117H148.885V16.9764H149.508V15.9058H150.131V15.447H150.754V14.8352H151.377V14.2235H153.09V13.7646H155.893V14.2235H157.607V14.8352H158.23V15.9058H158.852V16.5176H159.475V17.1294H157.139V16.5176H156.516V15.9058H155.426V15.447H153.713V16.0588H152.623V16.6705H152V17.2823H151.377V18.3529H150.754V20.647H151.377V21.7176H152V22.3294H152.623V22.9411H153.713V23.5529H155.426V22.9411H156.516V22.3294H157.139V21.7176H159.475V22.3294H158.852V22.9411H158.23V24.0117H157.607V24.6235H155.893V24.9294H153.09Z"
          fill={props.color2}
        ></path>
        <path
          d="M160.877 24.9294V13.7646H162.59V23.247H168.352V24.9294H160.877Z"
          fill={props.color2}
        ></path>
        <path
          d="M172.246 24.9294V24.3176H171.156V23.7058H170.533V22.6352H169.91V13.7646H171.623V21.5646H172.246V22.6352H172.869V23.247H175.672V22.6352H176.295V21.5646H176.918V13.7646H178.631V22.6352H178.008V23.7058H177.385V24.3176H176.295V24.9294H172.246Z"
          fill={props.color2}
        ></path>
        <path
          d="M180.5 24.9294V13.7646H186.262V14.2235H186.885V14.8352H187.508V15.447H188.131V18.1999H187.508V19.2705H188.131V19.8823H188.754V23.247H188.131V23.8588H187.508V24.4705H186.885V24.9294H180.5ZM185.639 18.1999V17.5882H186.262V15.9058H185.639V15.447H182.213V18.1999H185.639ZM186.262 23.247V22.6352H186.885V20.3411H186.262V19.7294H182.213V23.0941H186.262V23.247Z"
          fill={props.color2}
        ></path>
        <path
          d="M185.795 5.81181C184.393 5.81181 183.147 4.58828 183.147 3.21181C183.147 1.83534 184.393 0.611816 185.795 0.611816C187.197 0.611816 188.443 1.83534 188.443 3.21181C188.443 4.58828 187.352 5.81181 185.795 5.81181ZM185.795 1.07064C184.549 1.07064 183.615 1.98828 183.615 3.21181C183.615 4.43534 184.549 5.35299 185.795 5.35299C187.041 5.35299 187.975 4.43534 187.975 3.21181C187.975 1.98828 187.041 1.07064 185.795 1.07064ZM185.951 4.58828C185.016 4.58828 184.549 3.97652 184.549 3.05887C184.549 2.14122 185.172 1.52946 186.106 1.52946C186.885 1.52946 187.508 1.98828 187.508 2.60005H186.729C186.574 2.29416 186.418 2.14122 186.106 2.14122C185.639 2.14122 185.328 2.4471 185.328 3.05887C185.328 3.67063 185.639 3.97652 186.106 3.97652C186.418 3.97652 186.729 3.82358 186.729 3.51769H187.508C187.197 4.2824 186.729 4.58828 185.951 4.58828Z"
          fill={props.color2}
        ></path>
        <path
          d="M75.2212 11.7766V0.458984H81.6064V1.07075H82.2294V1.68252H82.8523V2.29428H83.4753V5.04722H82.8523V5.65899H82.2294V6.27075H81.6064V6.88252H79.8933V7.49428H80.5163V8.10605H81.1392V8.71781H81.7622V9.32958H82.3851V9.94134H83.0081V10.5531H83.631V11.1649H84.254H84.8769V11.7766H82.5409V11.1649H81.9179V10.5531H81.295V10.0943H80.672V9.48252H80.0491V8.87075H79.4261V8.41193H78.8032V7.80016H78.1802V7.1884H77.5573V6.72958H76.9343V11.7766H75.2212ZM80.8278 5.04722V4.43546H81.4507V2.75311H80.8278V2.14134H76.7786V5.04722H80.8278Z"
          fill={props.color1}
        ></path>
        <path
          d="M85.5 11.7766V10.0943H86.1229V8.87075H86.7459V7.1884H87.2131V6.11781H87.8361V5.04722H88.459V3.82369H89.082V2.75311H89.7049V1.52957H90.3279V0.458984H91.8853V1.52957H92.5082V2.60016H93.1312V3.67075H93.7541V5.04722H94.3771V6.11781H95V7.1884H95.623V8.87075H96.2459V9.94134H96.8689V11.6237H95.1557V10.5531H94.5328V9.48252H93.9098V8.41193H88.7705V9.48252H88.1475V10.5531H87.2131V11.6237H85.5V11.7766ZM92.9754 6.72958V6.11781H92.3525V5.04722H91.8853V3.82369H91.2623V2.75311H90.6393V3.82369H90.0164V5.04722H89.3934V6.11781H88.7705V6.72958H92.9754Z"
          fill={props.color1}
        ></path>
        <path
          d="M97.8032 11.7766V0.458984H102.943V1.07075H104.656V1.68252H105.279V2.29428H105.902V2.90605H106.525V3.97663H107.147V8.56487H106.525V9.63546H105.902V10.2472H105.279V10.859H104.656V11.1649H102.943V11.7766H97.8032ZM102.475 10.0943V9.48252H103.566V8.87075H104.188V8.41193H104.811V7.1884H105.434V5.04722H104.811V3.82369H104.188V3.21193H103.566V2.75311H102.475V2.14134H99.6721V10.0943H102.475Z"
          fill={props.color1}
        ></path>
        <path
          d="M108.861 11.7766V0.458984H110.574V11.7766H108.861Z"
          fill={props.color1}
        ></path>
        <path
          d="M116.492 11.7766V11.1649H114.778V10.5531H114.156V10.0943H113.688V9.48252H113.065V8.41193H112.442V3.82369H113.065V2.75311H113.688V2.14134H114.311V1.52957H114.934V1.07075H116.647V0.458984H119.451V1.07075H121.164V1.68252H121.787V2.29428H122.41V2.90605H123.033V3.97663H123.656V8.56487H123.033V9.63546H122.41V10.2472H121.787V10.859H121.164V11.1649H119.451V11.7766H116.492ZM118.828 10.0943V9.48252H119.918V8.87075H120.541V8.41193H121.164V7.1884H121.787V5.04722H121.164V3.82369H120.541V3.21193H119.918V2.75311H118.828V2.14134H117.115V2.75311H116.024V3.36487H115.401V3.97663H114.778V5.04722H114.156V7.34134H114.778V8.41193H115.401V9.02369H116.024V9.63546H117.115V10.2472H118.828V10.0943Z"
          fill={props.color1}
        ></path>
        <path
          d="M124.59 11.7766V10.0943H125.213V8.87075H125.836V7.1884H126.459V6.11781H127.082V5.04722H127.705V3.82369H128.328V2.75311H128.951V1.52957H129.574V0.458984H130.82V1.52957H131.443V2.60016H132.066V3.67075H132.689V5.04722H133.312V6.11781H133.935V7.1884H134.558V8.87075H135.181V9.94134H135.492V11.6237H133.779V10.5531H133.156V9.48252H132.533V8.41193H127.394V9.48252H126.771V10.5531H126.148V11.6237H124.59V11.7766ZM132.066 6.72958V6.11781H131.443V5.04722H130.82V3.82369H130.197V2.75311H129.574V3.82369H128.951V5.04722H128.328V6.11781H127.705V6.72958H132.066Z"
          fill={props.color1}
        ></path>
        <path
          d="M139.852 11.7766V11.1649H138.139V10.5531H137.516V10.0943H137.049V9.48252H136.426V8.41193H135.803V3.82369H136.426V2.75311H137.049V2.14134H137.672V1.52957H138.295V1.07075H140.008V0.458984H142.811V1.07075H144.525V1.68252H145.148V2.75311H145.77V3.36487H146.393V3.97663H144.057V3.21193H143.279V2.75311H142.189V2.14134H140.475V2.75311H139.385V3.36487H138.762V3.97663H138.139V5.04722H137.516V7.34134H138.139V8.41193H138.762V9.02369H139.385V9.63546H140.475V10.2472H142.189V9.48252H143.279V8.87075H143.902V8.41193H146.238V9.02369H145.615V9.63546H144.992V10.706H144.369V11.1649H142.656V11.7766H139.852Z"
          fill={props.color1}
        ></path>
        <path
          d="M150.443 11.7766V2.14134H146.394V0.458984H156.205V2.14134H152.156V11.7766H150.443Z"
          fill={props.color1}
        ></path>
        <path
          d="M157.451 11.7766V0.458984H159.164V11.7766H157.451Z"
          fill={props.color1}
        ></path>
        <path
          d="M164.459 11.7766V10.5531H163.836V8.87075H163.213V7.80016H162.59V6.11781H161.967V4.43546H161.344V3.21193H160.721V1.52957H160.41V0.458984H162.123V1.52957H162.746V3.21193H163.369V4.28252H163.992V5.96487H164.615V7.64722H165.238V8.71781H165.86V7.80016H166.483V6.11781H167.106V4.43546H167.729V3.21193H168.352V1.52957H168.975V0.458984H170.688V1.52957H170.065V3.21193H169.442V4.28252H168.82V5.96487H168.197V7.64722H167.574V8.71781H166.951V10.4002H166.328V11.4708H164.459V11.7766Z"
          fill={props.color1}
        ></path>
        <path
          d="M171.623 11.7766V0.458984H178.475V2.14134H173.336V5.04722H178.475V6.72958H173.336V10.0943H178.475V11.7766H171.623Z"
          fill={props.color1}
        ></path>
        <path
          d="M136.426 19.2704H133.779L133.156 18.1998L134.402 16.0586L136.426 19.2704Z"
          fill={props.color1}
        ></path>
        <path
          d="M134.402 22.6354H130.664L131.91 20.3413H133.156L134.402 22.6354Z"
          fill={props.color1}
        ></path>
        <path
          d="M131.91 18.1998L131.287 19.2704H128.639L130.664 16.0586L131.91 18.1998Z"
          fill={props.color1}
        ></path>
      </svg>
    </div>
  );
};

export default Logo;
