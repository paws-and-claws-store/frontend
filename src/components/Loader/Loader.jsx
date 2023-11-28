// component with custom loader

import React from 'react';
import { PawLoaderContainerSVG } from './Loader.styled';
import { theme } from 'styles';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: `${theme.zIndexes.backdropLoader}`,
        top: '0',
        left: '0',
        width: '100vw',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <PawLoaderContainerSVG
          id="eVgZOIfRPKw1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <path
            d="M26.5,10c-.6922,0-1.3689.2053-1.9445.5899-.5756.3845-1.0242.9312-1.2891,1.5707s-.3342,1.3433-.1991,2.0222.4683,1.3026.9578,1.7921s1.1132.8228,1.7921.9578s1.3827.0658,2.0222-.1991s1.1862-.7135,1.5707-1.2891.5899-1.2523.5899-1.9445c0-.9283-.3687-1.8185-1.0251-2.4749s-1.5466-1.0251-2.4749-1.0251Zm0,5c-.2967,0-.5867-.088-.8334-.2528-.2466-.1648-.4389-.3991-.5524-.6732s-.1433-.5757-.0854-.8666.2008-.5583.4105-.7681c.2098-.2097.4771-.3526.7681-.4105s.5925-.0281.8666.0854.5084.3058.6732.5524.2528.5367.2528.8334c0,.3978-.158.7794-.4393,1.0607s-.6629.4393-1.0607.4393ZM9,13.5c0-.6922-.20527-1.3689-.58985-1.9445s-.93121-1.0242-1.57076-1.2891-1.34327-.3342-2.0222-.1991-1.30258.4683-1.79206.9578-.82283,1.1132-.95788,1.7921-.06573,1.3827.19917,2.0222.71351,1.1862,1.28909,1.5707s1.25226.5899,1.94449.5899c.92826,0,1.8185-.3687,2.47487-1.0251s1.02513-1.5466,1.02513-2.4749ZM5.5,15c-.29667,0-.58668-.088-.83335-.2528s-.43894-.3991-.55247-.6732-.14323-.5757-.08536-.8666.20074-.5583.41052-.7681c.20978-.2097.47705-.3526.76803-.4105s.59257-.0281.86666.0854.50835.3058.67318.5524.25279.5367.25279.8334c0,.3978-.15803.7794-.43934,1.0607s-.66283.4393-1.06066.4393Zm6-4c.6922,0,1.3689-.2053,1.9445-.5899.5756-.3845,1.0242-.93117,1.2891-1.57071s.3342-1.34327.1992-2.0222-.4684-1.30258-.9579-1.79206-1.1131-.82283-1.7921-.95788-1.3826-.06573-2.0222.19917-1.18616.71351-1.57074,1.28909-.58986,1.25226-.58986,1.94449c0,.92826.36875,1.8185,1.02513,2.47487s1.54657,1.02513,2.47487,1.02513Zm0-5c.2967,0,.5867.08798.8334.2528s.4389.39909.5524.67318.1433.57569.0854.86666-.2008.55824-.4105.76802c-.2098.20978-.4771.35264-.7681.41052s-.5925.02817-.8666-.08536-.5084-.30579-.6732-.55246-.2528-.53669-.2528-.83336c0-.39782.158-.77935.4393-1.06066s.6629-.43934,1.0607-.43934Zm9,5c.6922,0,1.3689-.2053,1.9445-.5899.5756-.3845,1.0242-.93117,1.2891-1.57071s.3342-1.34327.1992-2.0222c-.1351-.67894-.4684-1.30258-.9579-1.79206s-1.1131-.82283-1.7921-.95788-1.3826-.06573-2.0222.19917c-.6395.26491-1.1862.71351-1.5707,1.28909s-.5899,1.25226-.5899,1.94449c0,.92826.3687,1.8185,1.0251,2.47487s1.5466,1.02513,2.4749,1.02513Zm0-5c.2967,0,.5867.08798.8334.2528.2466.16482.4389.39909.5524.67318.1136.27409.1433.57569.0854.86666s-.2008.55824-.4105.76802c-.2098.20978-.4771.35264-.7681.41052s-.5925.02817-.8666-.08536-.5084-.30579-.6732-.55246-.2528-.53669-.2528-.83336c0-.39782.158-.77935.4393-1.06066s.6629-.43934,1.0607-.43934Zm2.89,12.6075c-.5079-.2802-.9556-.6578-1.3175-1.1113s-.6307-.9737-.7912-1.5312c-.3325-1.1434-1.0272-2.1481-1.9795-2.863s-2.111-1.1013-3.3018-1.1013-2.3494.3865-3.3018,1.1013c-.9523.7149-1.647,1.7196-1.9794,2.863-.3212,1.1217-1.0742,2.0702-2.0938,2.6375-.9781.5293-1.75184,1.3695-2.19884,2.3878s-.54175,2.1566-.26925,3.2348.89667,2.0348,1.77381,2.7185s1.95717,1.0554,3.06928,1.0564c.6665.0019,1.3264-.1312,1.94-.3912c1.9563-.8069,4.1524-.8069,6.1088,0c1.1849.5153,2.5233.5519,3.7347.1021s2.2015-1.3511,2.7629-2.515.6504-2.4998.2484-3.7278-1.2639-2.2528-2.4048-2.8593v-.0013ZM21,26c-.406.0003-.8079-.0817-1.1812-.2412-2.4493-1.0117-5.1996-1.0117-7.6488,0-.7117.3064-1.5145.3256-2.24004.0534s-1.31765-.8145-1.65227-1.5135-.38578-1.5003-.14279-2.2361.7613-1.3491,1.44635-1.7113c.73655-.4068,1.38565-.9548,1.91035-1.6126s.9144-1.4126,1.1472-2.2212c.2113-.728.6533-1.3677,1.2594-1.823.6062-.4552,1.3437-.7013,2.1018-.7013s1.4956.2461,2.1018.7013c.6061.4553,1.0481,1.095,1.2595,1.823.2334.8101.6245,1.5662,1.1506,2.2249s1.1771,1.2071,1.9156,1.6139c.5898.3163,1.0569.8207,1.327,1.4331s.3276,1.2974.1635,1.9463c-.1641.6488-.5405,1.2241-1.0692,1.6344s-1.1795.632-1.8488.6299Z"
            transform="translate(.0211 0.147151)"
            fill="#b2ab73"
          />
          <path
            id="eVgZOIfRPKw4"
            d="M9,13.5c0-.6922-.20527-1.3689-.58985-1.9445s-.93121-1.0242-1.57076-1.2891-1.34327-.3342-2.0222-.1991-1.30258.4683-1.79206.9578-.95788,1.7921-.95788,1.7921-.06573,1.3827.19917,2.0222.71351,1.1862,1.28909,1.5707s1.25226.5899,1.94449.5899c.92826,0,1.8185-.3687,2.47487-1.0251s1.02513-1.5466,1.02513-2.4749ZM5.5,15c-.29667,0-.58668-.088-.83335-.2528s-.43894-.3991-.55247-.6732-.14323-.5757-.08536-.8666.20074-.5583.41052-.7681c.20978-.2097.47705-.3526.76803-.4105s.59257-.0281.86666.0854.50835.3058.67318.5524.25279.5367.25279.8334c0,.3978-.15803.7794-.43934,1.0607s-.66283.4393-1.06066.4393Z"
            transform="translate(-.038989 0.161475)"
            fill="#e68314"
          />
          <path
            id="eVgZOIfRPKw5"
            d="M9,13.5c0-.6922-.20527-1.3689-.58985-1.9445s-.93121-1.0242-1.57076-1.2891-1.34327-.3342-2.0222-.1991-1.30258.4683-1.79206.9578-.82283,1.1132-.95788,1.7921-.06573,1.3827.19917,2.0222.71351,1.1862,1.28909,1.5707s1.25226.5899,1.94449.5899c.92826,0,1.8185-.3687,2.47487-1.0251s1.02513-1.5466,1.02513-2.4749ZM5.5,15c-.29667,0-.58668-.088-.83335-.2528s-.43894-.3991-.55247-.6732-.14323-.5757-.08536-.8666.20074-.5583.41052-.7681c.20978-.2097.47705-.3526.76803-.4105s.59257-.0281.86666.0854.50835.3058.67318.5524.25279.5367.25279.8334c0,.3978-.15803.7794-.43934,1.0607s-.66283.4393-1.06066.4393Z"
            transform="translate(5.957629-5.852858)"
            opacity="0"
            fill="#e68314"
          />
          <path
            id="eVgZOIfRPKw6"
            d="M9,13.5c0-.6922-.20527-1.3689-.58985-1.9445s-.93121-1.0242-1.57076-1.2891-1.34327-.3342-2.0222-.1991-1.30258.4683-1.79206.9578-.82283,1.1132-.95788,1.7921-.06573,1.3827.19917,2.0222.71351,1.1862,1.28909,1.5707s1.25226.5899,1.94449.5899c.92826,0,1.8185-.3687,2.47487-1.0251s1.02513-1.5466,1.02513-2.4749ZM5.5,15c-.29667,0-.58668-.088-.83335-.2528s-.43894-.3991-.55247-.6732-.14323-.5757-.08536-.8666.20074-.5583.41052-.7681c.20978-.2097.47705-.3526.76803-.4105s.59257-.0281.86666.0854.50835.3058.67318.5524.25279.5367.25279.8334c0,.3978-.15803.7794-.43934,1.0607s-.66283.4393-1.06066.4393Z"
            transform="translate(15.036281-5.852858)"
            opacity="0"
            fill="#e68314"
          />
          <path
            id="eVgZOIfRPKw7"
            d="M9,13.5c0-.6922-.20527-1.3689-.58985-1.9445s-.93121-1.0242-1.57076-1.2891-1.34327-.3342-2.0222-.1991-1.30258.4683-1.79206.9578-.82283,1.1132-.95788,1.7921-.06573,1.3827.19917,2.0222.71351,1.1862,1.28909,1.5707s1.25226.5899,1.94449.5899c.92826,0,1.8185-.3687,2.47487-1.0251s1.02513-1.5466,1.02513-2.4749ZM5.5,15c-.29667,0-.58668-.088-.83335-.2528s-.43894-.3991-.55247-.6732-.14323-.5757-.08536-.8666.20074-.5583.41052-.7681c.20978-.2097.47705-.3526.76803-.4105s.59257-.0281.86666.0854.50835.3058.67318.5524.25279.5367.25279.8334c0,.3978-.15803.7794-.43934,1.0607s-.66283.4393-1.06066.4393Z"
            transform="translate(21.0211 0.161475)"
            opacity="0"
            fill="#e68314"
          />
          <path
            id="eVgZOIfRPKw8"
            d="M23.39,18.6075c-.5079-.2802-.9556-.6578-1.3175-1.1113s-.6307-.9737-.7912-1.5312c-.3325-1.1434-1.0272-2.1481-1.9795-2.863s-2.111-1.1013-3.3018-1.1013-2.3494.3865-3.3018,1.1013c-.9523.7149-1.647,1.7196-1.9794,2.863-.3212,1.1217-1.0742,2.0702-2.0938,2.6375-.9781.5293-1.75184,1.3695-2.19884,2.3878s-.54175,2.1566-.26925,3.2348.89667,2.0348,1.77381,2.7185s1.95717,1.0554,3.06928,1.0564c.6665.0019,1.3264-.1312,1.94-.3912c1.9563-.8069,4.1524-.8069,6.1088,0c1.1849.5153,2.5233.5519,3.7347.1021s2.2015-1.3511,2.7629-2.515.6504-2.4998.2484-3.7278-1.2639-2.2528-2.4048-2.8593v-.0013ZM21,26c-.406.0003-.8079-.0817-1.1812-.2412-2.4493-1.0117-5.1996-1.0117-7.6488,0-.7117.3064-1.5145.3256-2.24004.0534s-1.31765-.8145-1.65227-1.5135-.38578-1.5003-.14279-2.2361.7613-1.3491,1.44635-1.7113c.73655-.4068,1.38565-.9548,1.91035-1.6126s.9144-1.4126,1.1472-2.2212c.2113-.728.6533-1.3677,1.2594-1.823.6062-.4552,1.3437-.7013,2.1018-.7013s1.4956.2461,2.1018.7013c.6061.4553,1.0481,1.095,1.2595,1.823.2334.8101.6245,1.5662,1.1506,2.2249s1.1771,1.2071,1.9156,1.6139c.5898.3163,1.0569.8207,1.327,1.4331s.3276,1.2974.1635,1.9463c-.1641.6488-.5405,1.2241-1.0692,1.6344s-1.1795.632-1.8488.6299Z"
            transform="translate(-.002607 0.147151)"
            opacity="0"
            fill="#e68314"
          />
        </PawLoaderContainerSVG>
      </div>
    </div>
  );
};

export default Loader;
