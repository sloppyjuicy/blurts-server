/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SVGProps } from "react";
import styles from "./Icons.module.scss";

// Note: ideally, the Nebula icons are made available in a repository somewhere,
//       then added to react-icons: https://react-icons.github.io/react-icons/.
//       These manually-created components are a workaround until that is done.

// Keywords: cross, X
export const ArrowIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      width={16}
      height={14}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M1.00021 6.00001H12.5862L8.29321 1.70701C7.91424 1.31463 7.91966 0.690926 8.3054 0.305192C8.69113 -0.0805418 9.31483 -0.0859616 9.70721 0.293011L15.7072 6.29301C16.0976 6.68351 16.0976 7.31651 15.7072 7.70701L9.70721 13.707C9.31483 14.086 8.69113 14.0806 8.3054 13.6948C7.91966 13.3091 7.91424 12.6854 8.29321 12.293L12.5862 8.00001H1.00021C0.447928 8.00001 0.000213623 7.5523 0.000213623 7.00001C0.000213623 6.44773 0.447928 6.00001 1.00021 6.00001Z" />
    </svg>
  );
};

// Keywords: cross, X
export const CloseBigIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M9.63004 7.98596L15.6792 1.93681C15.8874 1.72127 16.0026 1.43258 16 1.13293C15.9974 0.833273 15.8772 0.54663 15.6653 0.334735C15.4534 0.12284 15.1667 0.00264711 14.8671 4.3203e-05C14.5674 -0.0025607 14.2787 0.112633 14.0632 0.320813L8.01404 6.36996L1.9649 0.320813C1.74936 0.112633 1.46067 -0.0025607 1.16101 4.3203e-05C0.86136 0.00264711 0.574717 0.12284 0.362822 0.334735C0.150927 0.54663 0.0307344 0.833273 0.0281305 1.13293C0.0255266 1.43258 0.14072 1.72127 0.348901 1.93681L6.39804 7.98596L0.348901 14.0351C0.239746 14.1405 0.152681 14.2666 0.0927849 14.4061C0.0328888 14.5455 0.0013618 14.6955 4.31505e-05 14.8472C-0.0012755 14.999 0.0276408 15.1495 0.0851046 15.2899C0.142569 15.4304 0.227429 15.558 0.334735 15.6653C0.442041 15.7726 0.569643 15.8574 0.710096 15.9149C0.850549 15.9724 1.00104 16.0013 1.15279 16C1.30454 15.9986 1.4545 15.9671 1.59393 15.9072C1.73337 15.8473 1.85948 15.7603 1.9649 15.6511L8.01404 9.60196L14.0632 15.6511C14.2787 15.8593 14.5674 15.9745 14.8671 15.9719C15.1667 15.9693 15.4534 15.8491 15.6653 15.6372C15.8772 15.4253 15.9974 15.1386 16 14.839C16.0026 14.5393 15.8874 14.2506 15.6792 14.0351L9.63004 7.98596Z" />
    </svg>
  );
};

// Keywords: four squares, window, dashboard
export const UnionIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={18}
      height={18}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 2H6V6H2V2ZM0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2ZM12 2H16V6H12V2ZM10 2C10 0.895431 10.8954 0 12 0H16C17.1046 0 18 0.895431 18 2V6C18 7.10457 17.1046 8 16 8H12C10.8954 8 10 7.10457 10 6V2ZM6 12H2V16H6V12ZM2 10C0.895431 10 0 10.8954 0 12V16C0 17.1046 0.895431 18 2 18H6C7.10457 18 8 17.1046 8 16V12C8 10.8954 7.10457 10 6 10H2ZM12 12H16V16H12V12ZM10 12C10 10.8954 10.8954 10 12 10H16C17.1046 10 18 10.8954 18 12V16C18 17.1046 17.1046 18 16 18H12C10.8954 18 10 17.1046 10 16V12Z"
      />
    </svg>
  );
};

// Keywords: menu, hamburger, list
export const ListIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={12}
      height={12}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M1 2H11C11.2652 2 11.5196 1.89464 11.7071 1.70711C11.8946 1.51957 12 1.26522 12 1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM11 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5ZM11 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10Z" />
    </svg>
  );
};

// Link to icon: https://www.figma.com/file/olFHozlwrdYlCkZaG4B262/Nebula-Design-System-V2-(WIP)?type=design&node-id=665-3694&t=URLSlaDVXUyc57kL-4
export const ChevronDown = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 7"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M0.012288 0.999815C0.0123744 0.595419 0.256015 0.230881 0.629633 0.0761372C1.00325 -0.0786067 1.43329 0.0069073 1.71929 0.292815L6.01229 4.58582L10.3053 0.292816C10.6977 -0.0861566 11.3214 -0.0807368 11.7071 0.304997C12.0928 0.690731 12.0983 1.31444 11.7193 1.70682L6.71929 6.70682C6.32879 7.0972 5.69579 7.0972 5.30529 6.70682L0.305288 1.70682C0.117739 1.51932 0.0123447 1.26501 0.012288 0.999815Z"></path>
    </svg>
  );
};

export const OpenInNew = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 14"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M4 0H3C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V10C14 9.44772 13.5523 9 13 9C12.4477 9 12 9.44772 12 10V11C12 11.5523 11.5523 12 11 12H3C2.44772 12 2 11.5523 2 11V3C2 2.44772 2.44772 2 3 2H4C4.55228 2 5 1.55228 5 1C5 0.447715 4.55228 0 4 0Z" />
      <path d="M13.935 0.618C13.7805 0.244353 13.4163 0.00047005 13.012 0H8.01196C7.45968 0 7.01196 0.447715 7.01196 1C7.01196 1.55228 7.45968 2 8.01196 2H10.598L7.30496 5.293C6.9145 5.68374 6.91472 6.31703 7.30546 6.7075C7.6962 7.09797 8.3295 7.09774 8.71996 6.707L12.013 3.414V6C12.013 6.55228 12.4607 7 13.013 7C13.5652 7 14.013 6.55228 14.013 6V1C14.0126 0.868849 13.9864 0.739052 13.936 0.618H13.935Z" />
    </svg>
  );
};

export const MultipleUsers = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M16 9.73366C16 10.1337 15.2 10.4003 14.2667 10.5337C13.6667 9.40033 12.4667 8.53366 11.0667 7.93366C11.2 7.73366 11.3333 7.60033 11.4667 7.40033H12C14.0667 7.33366 16 8.60033 16 9.73366V9.73366ZM4.53333 7.33366H4C1.93333 7.33366 0 8.60033 0 9.73366C0 10.1337 0.8 10.4003 1.73333 10.5337C2.33333 9.40033 3.53333 8.53366 4.93333 7.93366L4.53333 7.33366V7.33366ZM8 8.00033C9.46667 8.00033 10.6667 6.80033 10.6667 5.33366C10.6667 3.86699 9.46667 2.66699 8 2.66699C6.53333 2.66699 5.33333 3.86699 5.33333 5.33366C5.33333 6.80033 6.53333 8.00033 8 8.00033ZM8 8.66699C5.26667 8.66699 2.66667 10.4003 2.66667 12.0003C2.66667 13.3337 8 13.3337 8 13.3337C8 13.3337 13.3333 13.3337 13.3333 12.0003C13.3333 10.4003 10.7333 8.66699 8 8.66699ZM11.8 6.66699H12C13.1333 6.66699 14 5.80033 14 4.66699C14 3.53366 13.1333 2.66699 12 2.66699C11.6667 2.66699 11.4 2.73366 11.1333 2.86699C11.6667 3.53366 12 4.40033 12 5.33366C12 5.80033 11.9333 6.26699 11.8 6.66699ZM4 6.66699H4.2C4.06667 6.26699 4 5.80033 4 5.33366C4 4.40033 4.33333 3.53366 4.86667 2.86699C4.6 2.73366 4.33333 2.66699 4 2.66699C2.86667 2.66699 2 3.53366 2 4.66699C2 5.80033 2.86667 6.66699 4 6.66699Z" />
    </svg>
  );
};

export const PhoneIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M8.67166 9.24002L9.79166 8.12002C9.94251 7.97104 10.1334 7.86906 10.3411 7.82646C10.5487 7.78385 10.7643 7.80246 10.9617 7.88002L12.3267 8.42502C12.5261 8.50596 12.697 8.64411 12.8181 8.82207C12.9391 9.00003 13.0047 9.20983 13.0067 9.42502V11.925C13.0055 12.0714 12.9747 12.216 12.9162 12.3502C12.8577 12.4844 12.7726 12.6054 12.6661 12.7058C12.5596 12.8062 12.4338 12.8841 12.2964 12.9346C12.1591 12.9852 12.0129 13.0074 11.8667 13C2.30166 12.405 0.371659 4.30502 0.00665873 1.20502C-0.0102848 1.05279 0.00519605 0.898694 0.0520828 0.752875C0.0989696 0.607056 0.1762 0.472817 0.278692 0.358988C0.381185 0.24516 0.506617 0.154323 0.646738 0.0924523C0.786858 0.0305818 0.93849 -0.00091958 1.09166 2.04345e-05H3.50666C3.72216 0.000658328 3.93255 0.0657541 4.11076 0.186935C4.28896 0.308116 4.42684 0.47984 4.50666 0.680021L5.05166 2.04502C5.13179 2.24155 5.15223 2.45734 5.11043 2.66543C5.06864 2.87351 4.96646 3.06467 4.81666 3.21502L3.69666 4.33502C3.69666 4.33502 4.34166 8.70002 8.67166 9.24002Z" />
    </svg>
  );
};

export const EmailIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M14.37 2.66679C14.3095 2.66055 14.2484 2.66055 14.1878 2.66679H1.74337C1.66361 2.66802 1.58438 2.67998 1.50781 2.70235L7.93003 9.0979L14.37 2.66679Z" />
      <path d="M15.0283 3.28516L8.55715 9.7296C8.39061 9.89516 8.16532 9.98808 7.93049 9.98808C7.69565 9.98808 7.47036 9.89516 7.30382 9.7296L0.890486 3.33405C0.87077 3.40651 0.860317 3.48118 0.859375 3.55627V12.4452C0.859375 12.6809 0.953026 12.907 1.11972 13.0737C1.28642 13.2404 1.51252 13.334 1.74826 13.334H14.1927C14.4285 13.334 14.6545 13.2404 14.8212 13.0737C14.9879 12.907 15.0816 12.6809 15.0816 12.4452V3.55627C15.0781 3.46367 15.0601 3.37219 15.0283 3.28516V3.28516ZM2.35715 12.4452H1.73938V11.8096L4.97049 8.60516L5.59715 9.23182L2.35715 12.4452ZM14.1838 12.4452H13.5616L10.3216 9.23182L10.9483 8.60516L14.1794 11.8096L14.1838 12.4452Z" />
    </svg>
  );
};

export const LocationPin = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 14"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M5.50001 0C4.04184 0.00172024 2.6439 0.581735 1.61282 1.61281C0.581741 2.64389 0.00172609 4.04184 5.85144e-06 5.5C-0.00174059 6.69161 0.387496 7.85089 1.10801 8.8C1.10801 8.8 1.25801 8.9975 1.28251 9.026L5.50001 14L9.71951 9.0235C9.74151 8.997 9.89201 8.8 9.89201 8.8L9.89251 8.7985C10.6127 7.84981 11.0017 6.69107 11 5.5C10.9983 4.04184 10.4183 2.64389 9.38719 1.61281C8.35612 0.581735 6.95817 0.00172024 5.50001 0V0ZM5.50001 7.5C5.10444 7.5 4.71776 7.3827 4.38887 7.16294C4.05997 6.94318 3.80362 6.63082 3.65225 6.26537C3.50087 5.89991 3.46126 5.49778 3.53844 5.10982C3.61561 4.72186 3.80609 4.36549 4.08579 4.08579C4.3655 3.80608 4.72186 3.6156 5.10983 3.53843C5.49779 3.46126 5.89992 3.50087 6.26537 3.65224C6.63082 3.80362 6.94318 4.05996 7.16294 4.38886C7.38271 4.71776 7.50001 5.10444 7.50001 5.5C7.49934 6.03023 7.28842 6.53855 6.91349 6.91348C6.53856 7.28841 6.03024 7.49934 5.50001 7.5V7.5Z" />
    </svg>
  );
};

export const QuestionMarkCircle = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 13"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.16735 2.78151C5.4077 2.69128 5.66457 2.6535 5.92072 2.67072C6.34018 2.6563 6.75252 2.78177 7.09286 3.02737C7.4332 3.27297 7.68221 3.62476 7.80072 4.02739C7.89751 4.41073 7.86226 4.81551 7.70065 5.17635C7.53904 5.53719 7.26051 5.83302 6.91005 6.01605C6.80075 6.06483 6.70593 6.14105 6.63479 6.23731C6.56365 6.33357 6.51861 6.44658 6.50405 6.56539V6.81205C6.50405 6.96676 6.44259 7.11514 6.3332 7.22453C6.2238 7.33393 6.07543 7.39539 5.92072 7.39539C5.76601 7.39539 5.61764 7.33393 5.50824 7.22453C5.39884 7.11514 5.33739 6.96676 5.33739 6.81205V6.58739C5.34511 6.26061 5.44044 5.94191 5.61341 5.66456C5.78639 5.38722 6.03066 5.16141 6.32072 5.01072C6.44962 4.95708 6.55561 4.85989 6.62018 4.73611C6.68475 4.61232 6.70382 4.46979 6.67405 4.33339C6.6212 4.17892 6.51853 4.04639 6.38217 3.95662C6.24581 3.86684 6.0835 3.8249 5.92072 3.83739C5.57072 3.83739 5.17072 3.92072 5.17072 4.58739C5.17072 4.7421 5.10926 4.89047 4.99987 4.99987C4.89047 5.10926 4.7421 5.17072 4.58739 5.17072C4.43268 5.17072 4.2843 5.10926 4.17491 4.99987C4.06551 4.89047 4.00405 4.7421 4.00405 4.58739C3.98684 4.33124 4.02461 4.07437 4.11484 3.83402C4.20507 3.59367 4.34567 3.37541 4.52721 3.19387C4.70874 3.01234 4.92701 2.87174 5.16735 2.78151ZM5.45774 7.8945C5.59479 7.80293 5.7559 7.75405 5.92072 7.75405C6.14173 7.75405 6.35369 7.84185 6.50998 7.99813C6.66626 8.15441 6.75405 8.36637 6.75405 8.58739C6.75405 8.7522 6.70518 8.91332 6.61361 9.05036C6.52204 9.1874 6.39189 9.29421 6.23962 9.35729C6.08735 9.42036 5.9198 9.43686 5.75814 9.40471C5.59649 9.37255 5.44801 9.29319 5.33146 9.17664C5.21492 9.0601 5.13555 8.91161 5.1034 8.74996C5.07124 8.58831 5.08775 8.42075 5.15082 8.26848C5.21389 8.11621 5.3207 7.98606 5.45774 7.8945Z"
      />
    </svg>
  );
};

// Keywords: close, exit, cross
// https://www.figma.com/file/olFHozlwrdYlCkZaG4B262/Nebula-Design-System-V2-(WIP)?type=design&node-id=109-1385&t=kxEcvIQoafGdPZ3y-4
export const CloseBtn = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.63004 7.98596L15.6792 1.93681C15.8874 1.72127 16.0026 1.43258 16 1.13293C15.9974 0.833273 15.8772 0.54663 15.6653 0.334735C15.4534 0.12284 15.1667 0.00264711 14.8671 4.3203e-05C14.5674 -0.0025607 14.2787 0.112633 14.0632 0.320813L8.01404 6.36996L1.9649 0.320813C1.74936 0.112633 1.46067 -0.0025607 1.16101 4.3203e-05C0.86136 0.00264711 0.574717 0.12284 0.362822 0.334735C0.150927 0.54663 0.0307344 0.833273 0.0281305 1.13293C0.0255266 1.43258 0.14072 1.72127 0.348901 1.93681L6.39804 7.98596L0.348901 14.0351C0.239746 14.1405 0.152681 14.2666 0.0927849 14.4061C0.0328888 14.5455 0.0013618 14.6955 4.31505e-05 14.8472C-0.0012755 14.999 0.0276408 15.1495 0.0851046 15.2899C0.142569 15.4304 0.227429 15.558 0.334735 15.6653C0.442041 15.7726 0.569643 15.8574 0.710096 15.9149C0.850549 15.9724 1.00104 16.0013 1.15279 16C1.30454 15.9986 1.4545 15.9671 1.59393 15.9072C1.73337 15.8473 1.85948 15.7603 1.9649 15.6511L8.01404 9.60196L14.0632 15.6511C14.2787 15.8593 14.5674 15.9745 14.8671 15.9719C15.1667 15.9693 15.4534 15.8491 15.6653 15.6372C15.8772 15.4253 15.9974 15.1386 16 14.839C16.0026 14.5393 15.8874 14.2506 15.6792 14.0351L9.63004 7.98596Z"
      />
    </svg>
  );
};

// Link to icon: https://www.figma.com/file/olFHozlwrdYlCkZaG4B262/Nebula-Design-System-V2-(WIP)?type=design&node-id=3515-9584&mode=design&t=O0YJKrRAhztcOpXU-4
// Keywords: View Grid, ViewGrid, Bento, AppPicker, App Picker
export const BentoIcon = (
  props: SVGProps<SVGSVGElement> & { alt?: string }
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-label={props.alt}
      aria-hidden={props.alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{props.alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H6.5C7.05228 1.5 7.5 1.94772 7.5 2.5V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H2.5C1.94772 7.5 1.5 7.05228 1.5 6.5V2.5ZM9 2.5C9 1.94772 9.44772 1.5 10 1.5H14C14.5523 1.5 15 1.94772 15 2.5V6.5C15 7.05228 14.5523 7.5 14 7.5H10C9.44772 7.5 9 7.05228 9 6.5V2.5ZM17.5 1.5C16.9477 1.5 16.5 1.94772 16.5 2.5V6.5C16.5 7.05228 16.9477 7.5 17.5 7.5H21.5C22.0523 7.5 22.5 7.05228 22.5 6.5V2.5C22.5 1.94772 22.0523 1.5 21.5 1.5H17.5ZM1.5 10C1.5 9.44772 1.94772 9 2.5 9H6.5C7.05228 9 7.5 9.44772 7.5 10V14C7.5 14.5523 7.05228 15 6.5 15H2.5C1.94772 15 1.5 14.5523 1.5 14V10ZM10 9C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H10ZM16.5 10C16.5 9.44772 16.9477 9 17.5 9H21.5C22.0523 9 22.5 9.44772 22.5 10V14C22.5 14.5523 22.0523 15 21.5 15H17.5C16.9477 15 16.5 14.5523 16.5 14V10ZM2.5 16.5C1.94772 16.5 1.5 16.9477 1.5 17.5V21.5C1.5 22.0523 1.94772 22.5 2.5 22.5H6.5C7.05228 22.5 7.5 22.0523 7.5 21.5V17.5C7.5 16.9477 7.05228 16.5 6.5 16.5H2.5ZM9 17.5C9 16.9477 9.44772 16.5 10 16.5H14C14.5523 16.5 15 16.9477 15 17.5V21.5C15 22.0523 14.5523 22.5 14 22.5H10C9.44772 22.5 9 22.0523 9 21.5V17.5ZM17.5 16.5C16.9477 16.5 16.5 16.9477 16.5 17.5V21.5C16.5 22.0523 16.9477 22.5 17.5 22.5H21.5C22.0523 22.5 22.5 22.0523 22.5 21.5V17.5C22.5 16.9477 22.0523 16.5 21.5 16.5H17.5Z"
      />
    </svg>
  );
};
