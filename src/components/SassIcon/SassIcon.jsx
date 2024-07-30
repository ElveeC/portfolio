import styles from "./SassIcon.module.scss";
import cn from "classnames";

const SassIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--animated']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="currentColor" rx="60" />
      <g clipPath="url(#clip0_137_201)">
        <path
          fill="#fff"
          d="M200.107 139.163C193.133 139.199 187.073 140.879 181.998 143.361C180.136 139.674 178.274 136.388 177.945 133.978C177.58 131.167 177.142 129.451 177.58 126.092C178.018 122.733 179.99 117.951 179.953 117.586C179.917 117.22 179.515 115.505 175.499 115.468C171.483 115.432 168.015 116.235 167.613 117.294C167.211 118.352 166.445 120.762 165.934 123.245C165.24 126.896 157.901 139.93 153.703 146.757C152.352 144.092 151.184 141.755 150.928 139.893C150.563 137.082 150.125 135.366 150.563 132.007C151.001 128.648 152.973 123.865 152.936 123.5C152.9 123.135 152.498 121.419 148.482 121.383C144.466 121.346 140.997 122.149 140.596 123.208C140.194 124.267 139.756 126.75 138.916 129.159C138.077 131.569 128.329 153.329 125.773 158.951C124.459 161.835 123.327 164.135 122.524 165.705C122.524 165.705 122.487 165.815 122.378 165.997C121.684 167.348 121.282 168.078 121.282 168.078C121.282 168.078 121.282 168.078 121.282 168.115C120.735 169.101 120.15 170.013 119.858 170.013C119.639 170.013 119.238 167.385 119.931 163.807C121.392 156.249 124.86 144.493 124.824 144.092C124.824 143.873 125.481 141.828 122.56 140.769C119.712 139.71 118.69 141.463 118.434 141.463C118.179 141.463 117.996 142.084 117.996 142.084C117.996 142.084 121.173 128.867 111.936 128.867C106.167 128.867 98.2081 135.183 94.2651 140.879C91.7824 142.23 86.4885 145.114 80.8295 148.217C78.6755 149.422 76.4484 150.627 74.3673 151.759C74.2213 151.613 74.0753 151.43 73.9292 151.284C62.7573 139.345 42.0928 130.912 42.969 114.884C43.2976 109.042 45.3056 93.7083 82.655 75.0883C113.396 59.9368 137.858 64.1354 142.093 73.4454C148.153 86.7349 128.986 111.415 97.2224 114.993C85.1012 116.344 78.7485 111.671 77.1421 109.919C75.4626 108.093 75.2071 107.984 74.5864 108.349C73.5641 108.896 74.2213 110.539 74.5864 111.488C75.5356 113.971 79.4422 118.352 86.0504 120.506C91.892 122.405 106.094 123.464 123.29 116.819C142.531 109.371 157.573 88.6699 153.155 71.3278C148.738 53.7302 119.53 47.9251 91.892 57.7462C75.4626 63.5878 57.6459 72.7882 44.831 84.7634C29.6065 99.0022 27.1968 111.379 28.1826 116.563C31.724 134.964 57.0983 146.939 67.2479 155.811C66.7368 156.103 66.2622 156.359 65.8606 156.578C60.7857 159.097 41.4356 169.21 36.6163 179.908C31.1399 192.029 37.4926 200.718 41.6912 201.886C54.7251 205.501 68.1242 199.002 75.3166 188.268C82.509 177.534 81.6328 163.588 78.3104 157.199C78.2739 157.126 78.2374 157.053 78.1643 156.98C79.4787 156.213 80.8295 155.41 82.1439 154.643C84.7361 153.11 87.2917 151.686 89.4823 150.517C88.241 153.913 87.3283 157.965 86.8901 163.807C86.3425 170.671 89.1537 179.579 92.8412 183.084C94.4842 184.617 96.4192 184.654 97.6605 184.654C101.969 184.654 103.904 181.076 106.058 176.841C108.686 171.656 111.06 165.632 111.06 165.632C111.06 165.632 108.102 181.916 116.134 181.916C119.055 181.916 122.012 178.119 123.327 176.184C123.327 176.22 123.327 176.22 123.327 176.22C123.327 176.22 123.4 176.111 123.546 175.855C123.838 175.38 124.02 175.088 124.02 175.088C124.02 175.088 124.02 175.052 124.02 175.015C125.189 172.971 127.817 168.334 131.724 160.63C136.762 150.7 141.618 138.287 141.618 138.287C141.618 138.287 142.056 141.317 143.553 146.355C144.429 149.313 146.255 152.562 147.715 155.702C146.547 157.345 145.817 158.257 145.817 158.257C145.817 158.257 145.817 158.257 145.853 158.294C144.904 159.535 143.882 160.886 142.75 162.2C138.77 166.947 134.024 172.387 133.367 173.957C132.6 175.819 132.783 177.169 134.243 178.265C135.302 179.068 137.2 179.177 139.135 179.068C142.713 178.812 145.233 177.936 146.474 177.388C148.409 176.695 150.673 175.636 152.79 174.066C156.697 171.182 159.07 167.056 158.851 161.616C158.741 158.622 157.755 155.629 156.551 152.817C156.916 152.306 157.244 151.795 157.609 151.284C163.78 142.266 168.562 132.372 168.562 132.372C168.562 132.372 169 135.402 170.497 140.441C171.227 142.996 172.724 145.771 174.039 148.473C168.234 153.183 164.656 158.659 163.378 162.237C161.078 168.882 162.867 171.875 166.262 172.569C167.796 172.898 169.986 172.168 171.593 171.474C173.637 170.817 176.047 169.685 178.347 168.005C182.253 165.121 186.014 161.105 185.795 155.665C185.685 153.183 185.028 150.736 184.115 148.363C189.044 146.319 195.397 145.187 203.502 146.136C220.881 148.181 224.313 159.024 223.655 163.588C222.998 168.151 219.347 170.634 218.142 171.401C216.938 172.168 216.536 172.423 216.646 172.971C216.792 173.774 217.376 173.737 218.398 173.591C219.822 173.336 227.525 169.904 227.854 161.507C228.402 150.773 218.179 139.053 200.107 139.163ZM66.0431 184.362C60.2746 190.641 52.2425 193.015 48.7741 191.007C45.0501 188.852 46.5105 179.579 53.5933 172.934C57.9015 168.882 63.4509 165.121 67.1384 162.821C67.9781 162.31 69.2195 161.58 70.7164 160.667C70.9719 160.521 71.118 160.448 71.118 160.448C71.41 160.265 71.7021 160.083 71.9942 159.9C74.5864 169.393 72.1037 177.754 66.0431 184.362ZM108.029 155.811C106.021 160.704 101.823 173.226 99.2669 172.533C97.0763 171.948 95.7255 162.456 98.8288 153.073C100.399 148.363 103.721 142.741 105.656 140.55C108.796 137.045 112.264 135.877 113.104 137.301C114.163 139.163 109.271 152.744 108.029 155.811ZM142.677 172.387C141.837 172.825 141.034 173.117 140.669 172.898C140.413 172.752 141.034 172.168 141.034 172.168C141.034 172.168 145.379 167.494 147.095 165.377C148.08 164.135 149.249 162.675 150.49 161.032C150.49 161.178 150.49 161.361 150.49 161.507C150.49 167.093 145.087 170.853 142.677 172.387ZM169.402 166.289C168.781 165.851 168.891 164.391 170.972 159.827C171.775 158.038 173.674 155.045 176.923 152.16C177.288 153.329 177.544 154.46 177.507 155.519C177.471 162.566 172.432 165.194 169.402 166.289Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_137_201">
          <rect
            width="200"
            height="149.909"
            fill="#fff"
            transform="translate(28 53)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SassIcon;
