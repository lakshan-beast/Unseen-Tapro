// import React from "react";

export default function CampingScene() {
  return (
    <div className="flex justify-center items-center min-h-screen  p-4 bg-transparent">
      {/* Container / Stage */}
      <div className="scene relative flex items-end justify-center w-100 h-100 mx-auto my-0 overflow-hidden rounded-[30%] shadow-2xl ">
        {/* Day / Night Sky Rotation Wrapper */}
        <div className="time-wrapper absolute inset-0 overflow-hidden bg-transparent">
          <div className="time absolute w-full h-[200%] origin-center rotate-270 animate-[earthRotation_5s_linear_infinite]">
            {/* Sun */}
            <div className="day absolute w-5 h-5 top-[20%] left-[40%] rounded-full bg-[#ef9431] animate-[sunrise_5s_ease-in-out_infinite]" />

            {/* Night Sky with Stars & Moon */}
            <div className="night animate-[nightTime_5s_ease-in-out_infinite] ">
              <span className="star star1 absolute w-1 h-1 right-[23%] bottom-[25%] rounded-full bg-white" />
              <span className="star star2 absolute w-1 h-1 right-[35%] bottom-[18%] rounded-full bg-white" />
              <span className="star star3 star-big absolute w-[6px] h-[6px] right-[47%] bottom-[25%] rounded-full bg-white" />
              <span className="star star4 absolute w-1 h-1 right-[22%] bottom-[20%] rounded-full bg-white" />
              <span className="star star5 absolute w-1 h-1 right-[18%] bottom-[30%] rounded-full bg-white" />
              <span className="star star6 star-big absolute w-[6px] h-[6px] right-[60%] bottom-[20%] rounded-full bg-white" />
              <span className="star star7 absolute w-1 h-1 right-[70%] bottom-[23%] rounded-full bg-white" />
              <div className="moon absolute w-[25px] h-[25px] bottom-[22%] right-[33%] rounded-full -rotate-[60deg] shadow-[9px_9px_3px_0_white] blur-[1px] animate-[moonOrbit_5s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Forest / Trees */}
        <div className="forest relative w-[75%] h-[90%] flex ">
          {[
            {
              id: "tree1",
              class: "tree1 w-[31%] left-0",
              delay: "delay-[0.3s]",
            },
            {
              id: "tree2",
              class: "tree2 w-[39%] left-[9%]",
              delay: "delay-[0.4s]",
            },
            {
              id: "tree3",
              class: "tree3 w-[32%] left-[24%]",
              delay: "delay-[0.5s]",
            },
            {
              id: "tree4",
              class: "tree4 w-[37%] left-[34%]",
              delay: "delay-[0.6s]",
            },
            {
              id: "tree5",
              class: "tree5 w-[44%] left-[44%]",
              delay: "delay-[0.7s]",
            },
            {
              id: "tree6",
              class: "tree6 w-[34%] left-[61%]",
              delay: "delay-[0.2s]",
            },
            {
              id: "tree7",
              class: "tree7 w-[24%] left-[76%]",
              delay: "delay-[0.1s]",
            },
          ].map((t) => (
            <div
              key={t.id}
              className={`tree absolute bottom-0 opacity-40 ${t.class}`}>
              <div
                className={`branch branch-top w-[80%] h-0 mx-auto pl-[40%] pb-[50%] overflow-hidden origin-[50%_100%] animate-[treeShake_0.5s_linear_infinite] ${t.delay}`}
              />
              <div className="branch branch-middle w-[90%] h-0 pl-[45%] pb-[65%] mx-auto -mt-[25%] overflow-hidden" />
              <div className="branch branch-bottom w-full h-0 pl-[50%] pb-[80%] mx-auto -mt-[40%] overflow-hidden" />
            </div>
          ))}
        </div>

        {/* Tent */}
        <div className="tent absolute w-[60%] h-[25%] -bottom-[0.5%] right-[15%] z-[1] text-right">
          <div className="roof inline-block relative w-[45%] h-full mr-[10%] z-[1] border-t-4 border-r-4 border-l-4 border-[#4D4454] rounded-tr-[6px] skew-x-[30deg] shadow-[inset_-3px_3px_0px_0px_#F7B563] bg-[#f6d484]" />

          <div className="roof-border-left absolute top-0 left-[35.7%] w-[1%] h-[125%] z-[1] flex flex-col justify-between origin-[50%_0%] rotate-[35deg]">
            <span className="roof-border roof-border1 block w-full h-[40%] rounded-[2px] border-2 border-[#4D4454]" />
            <span className="roof-border roof-border2 block w-full h-[10%] rounded-[2px] border-2 border-[#4D4454]" />
            <span className="roof-border roof-border3 block w-full h-[40%] rounded-[2px] border-2 border-[#4D4454]" />
          </div>

          <div className="door left-door absolute left-[13.5%] -bottom-[3%] w-[55px] h-[92px] overflow-hidden z-0 origin-[0_105%] rotate-[35deg]">
            <div className="left-door-inner absolute top-0 w-full h-full overflow-hidden bg-[#EDDDC2] origin-[0_105%] -rotate-[35deg]" />
          </div>

          <div className="door right-door absolute right-[21%] -bottom-[3%] w-[55px] h-[89px] overflow-hidden z-0 origin-[0_105%] -rotate-[30deg] -scale-x-100">
            <div className="right-door-inner absolute bottom-0 w-full h-full overflow-hidden bg-[#EFE7CF] origin-[0_120%] -rotate-[30deg]" />
          </div>
        </div>

        {/* Floor Lines */}
        <div className="floor absolute w-[80%] right-[10%] bottom-0 z-[1]">
          <div className="ground ground1 absolute left-0 w-[65%] rounded-[2px] border-2 border-[#4D4454]" />
          <div className="ground ground2 absolute right-0 w-[30%] rounded-[2px] border-2 border-[#4D4454]" />
        </div>

        {/* Fireplace & Pan */}
        <div className="fireplace block absolute left-[5%] w-[24%] h-[20%]">
          <div className="support absolute bottom-[-5%] left-[10%] w-[2px] h-[105%] border-2 border-[#4D4454]" />
          <div className="support absolute bottom-[-5%] left-[85%] w-[2px] h-[105%] border-2 border-[#4D4454]" />
          <div className="bar w-full h-[2px] rounded-[2px] border-2 border-[#4D4454]" />
          <div className="hanger block absolute top-0 left-1/2 -ml-[4px] w-[2px] h-[25%] border-2 border-[#4D4454]" />

          <div className="pan block absolute top-[25%] left-[35%] w-[25%] h-[50%] rounded-full border-4 border-[#4D4454] overflow-hidden animate-[heat_5s_linear_infinite]" />
          <div className="smoke block absolute top-[25%] left-[37%] w-[20%] h-[25%] bg-white blur-[5px] animate-[smoke_5s_linear_infinite]" />

          <div className="fire block absolute bottom-0 left-[33%] w-[25%] h-[120%] z-[1] animate-[fire_5s_linear_infinite]">
            <div className="line line1 absolute bottom-0 w-[2px] h-full animate-[fireLines_1s_linear_infinite]">
              <span className="particle particle1 absolute top-full h-[10%] z-[1] rounded-[2px] border-2 border-[#efb54a] animate-[fireParticles_0.5s_linear_infinite]" />
            </div>
            <div className="line line2 absolute bottom-0 left-1/2 -ml-[1px] w-[2px] h-full animate-[fireLines_1s_linear_infinite] [animation-delay:0.3s]">
              <span className="particle particle2 absolute top-full h-[10%] z-[1] rounded-[2px] border-2 border-[#efb54a] animate-[fireParticles_0.5s_linear_infinite] [animation-delay:0.3s]" />
            </div>
            <div className="line line3 absolute bottom-0 right-0 w-[2px] h-full animate-[fireLines_1s_linear_infinite] [animation-delay:0.5s]">
              <span className="particle particle3 absolute top-full h-[10%] z-[1] rounded-[2px] border-2 border-[#efb54a] animate-[fireParticles_0.5s_linear_infinite] [animation-delay:0.6s]" />
            </div>
          </div>
        </div>

        {/* Global Keyframes & Pseudo-element Styles */}
        <style>{`
          .scene {
            animation: stageBackground 5s linear infinite;
          }

          /* Pseudo Elements */
          .tree .branch:before {
            content: "";
            display: block;
            width: 0;
            height: 0;
            margin-left: -600px;
            border-left: 600px solid transparent;
            border-right: 600px solid transparent;
            border-bottom: 950px solid #000;
          }
          .roof:before {
            content: "";
            width: 70%;
            height: 70%;
            position: absolute;
            top: 15%;
            left: 15%;
            z-index: 0;
            border-radius: 10%;
            background-color: #E78C20;
          }
          .roof:after {
            content: "";
            height: 75%;
            width: 100%;
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
            background: linear-gradient(to bottom, rgba(231, 140, 32, 0.4) 0%, rgba(231, 140, 32, 0.4) 64%, rgba(231, 140, 32, 0.8) 65%, rgba(231, 140, 32, 0.8) 100%);
          }
          .left-door-inner:before {
            content: "";
            width: 15%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background: repeating-linear-gradient(#D4BC8B, #D4BC8B 4%, #E0D2A8 5%, #E0D2A8 10%);
          }
          .left-door-inner:after {
            content: "";
            width: 50%;
            height: 100%;
            position: absolute;
            top: 15%;
            left: 10%;
            transform: rotate(25deg);
            background-color: #fff;
          }
          .right-door-inner:before {
            content: "";
            width: 50%;
            height: 100%;
            position: absolute;
            top: 15%;
            right: -28%;
            z-index: 1;
            transform: rotate(15deg);
            background-color: #524A5A;
          }
          .right-door-inner:after {
            content: "";
            width: 50%;
            height: 100%;
            position: absolute;
            top: 15%;
            right: -20%;
            transform: rotate(20deg);
            background-color: #fff;
          }
          .fireplace:before {
            content: "";
            display: block;
            width: 8%;
            position: absolute;
            bottom: -4px;
            left: 2%;
            border-radius: 2px;
            border: 2px solid #4D4454;
            background: #4D4454;
          }
          .fireplace .support:before {
            content: "";
            width: 100%;
            height: 15%;
            position: absolute;
            top: -18%;
            left: -4px;
            border-radius: 2px;
            border: 2px solid #4D4454;
            transform-origin: 100% 100%;
            transform: rotate(45deg);
          }
          .fireplace .support:after {
            content: "";
            width: 100%;
            height: 15%;
            position: absolute;
            top: -18%;
            left: 0px;
            border-radius: 2px;
            border: 2px solid #4D4454;
            transform-origin: 0 100%;
            transform: rotate(-45deg);
          }
          .fireplace .pan:before {
            content: "";
            display: block;
            height: 53%;
            width: 100%;
            position: absolute;
            bottom: 0;
            z-index: -1;
            border-top: 4px solid #4D4454;
            background-color: #74667e;
            animation: hotPan 5s linear infinite;
          }
          .fireplace .fire:before {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: -4px;
            z-index: 1;
            border-radius: 2px;
            border: 1px solid #efb54a;
            background-color: #efb54a;
          }
          .time .night .moon:before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: -9px;
            left: 9px;
            border-radius: 50%;
            box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.05), 0 0 0 15px rgba(255, 255, 255, 0.05), 0 0 0 25px rgba(255, 255, 255, 0.05), 0 0 0 35px rgba(255, 255, 255, 0.05);
            background-color: rgba(255, 255, 255, 0.2);
          }

          /* Keyframes */
          @keyframes stageBackground {
            0%, 10%, 90%, 100% { background-color: #00B6BB; }
            85%, 95% { background-color: #616161; }
            opacity: 0.7;
          }
          @keyframes earthRotation {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes sunrise {
            0%, 10%, 90%, 100% { box-shadow: 0 0 0 25px #5ad6bd, 0 0 0 40px #4acead, 0 0 0 60px rgba(74, 206, 173, 0.6), 0 0 0 90px rgba(74, 206, 173, 0.3); }
            25%, 75% { box-shadow: 0 0 0 0 #5ad6bd, 0 0 0 0 #4acead, 0 0 0 0 rgba(74, 206, 173, 0.6), 0 0 0 0 rgba(74, 206, 173, 0.3); }
          }
          @keyframes moonOrbit {
            25%, 50% { transform: rotate(-60deg); }
            75% { transform: rotate(-120deg); }
            0%, 100% { transform: rotate(-180deg); }
          }
          @keyframes nightTime {
            0%, 90% { opacity: 0; }
            50%, 75% { opacity: 1; }
          }
          @keyframes hotPan {
            0%, 90% { background-color: #74667e; }
            50%, 75% { background-color: #b2241c; }
          }
          @keyframes heat {
            0%, 90% { box-shadow: inset 0 0 0 0 rgba(255, 255, 255, 0.3); }
            50%, 75% { box-shadow: inset 0 -2px 0 0 white; }
          }
          @keyframes smoke {
            0%, 50%, 90%, 100% { opacity: 0; }
            50%, 75% { opacity: 0.7; }
          }
          @keyframes fire {
            0%, 90%, 100% { opacity: 0; }
            50%, 75% { opacity: 1; }
          }
          @keyframes treeShake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-2deg); }
            40% { transform: rotate(4deg); }
            50% { transform: rotate(-4deg); }
            60% { transform: rotate(6deg); }
            75% { transform: rotate(-6deg); }
          }
          @keyframes fireParticles {
            0% { height: 30%; opacity: 1; top: 75%; }
            25% { height: 25%; opacity: 0.8; top: 40%; }
            50% { height: 15%; opacity: 0.6; top: 20%; }
            75% { height: 10%; opacity: 0.3; top: 0; }
            100% { opacity: 0; }
          }
          @keyframes fireLines {
            0%, 25%, 75%, 100% { bottom: 0; }
            50% { bottom: 5%; }
          }
          `}</style>
      </div>
          {/* Comming soon... */}
    </div>
  );
}
