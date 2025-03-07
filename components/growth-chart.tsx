import type React from "react"

export const GrowthChart: React.FC<{ isFlying: boolean; className?: string }> = ({ isFlying, className }) => {
  return (
    <svg
      width=""
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-2000 ease-in-out ${className || ""}`}
    >
      {/* Sombra das barras */}
      <g opacity="0.1">
        <rect x="40" y="160" width="30" height="20" fill="#FF5C00" />
        <rect x="90" y="140" width="30" height="40" fill="#FF5C00" />
        <rect x="140" y="110" width="30" height="70" fill="#FF5C00" />
        <rect x="190" y="80" width="30" height="100" fill="#FF5C00" />
        <rect x="240" y="60" width="30" height="120" fill="#FF5C00" />
        <rect x="290" y="40" width="30" height="140" fill="#FF5C00" />
        <rect x="340" y="20" width="30" height="160" fill="#FF5C00" />
      </g>

      {/* Barras com efeito 3D */}
      <g>
        <rect x="40" y="160" width="30" height="20" fill="#FF5C00" />
        <rect x="90" y="140" width="30" height="40" fill="#FF5C00" />
        <rect x="140" y="110" width="30" height="70" fill="#FF5C00" />
        <rect x="190" y="80" width="30" height="100" fill="#FF5C00" />
        <rect x="240" y="60" width="30" height="120" fill="#FF5C00" />
        <rect x="290" y="40" width="30" height="140" fill="#FF5C00" />
        <rect x="340" y="20" width="30" height="160" fill="#FF5C00" />

        {/* Efeito 3D lateral */}
        <path d="M70 160 L75 155 L75 175 L70 180 Z" fill="#E56228" />
        <path d="M120 140 L125 135 L125 175 L120 180 Z" fill="#E56228" />
        <path d="M170 110 L175 105 L175 175 L170 180 Z" fill="#E56228" />
        <path d="M220 80 L225 75 L225 175 L220 180 Z" fill="#E56228" />
        <path d="M270 60 L275 55 L275 175 L270 180 Z" fill="#E56228" />
        <path d="M320 40 L325 35 L325 175 L320 180 Z" fill="#E56228" />
        <path d="M370 20 L375 15 L375 175 L370 180 Z" fill="#E56228" />
      </g>

      {/* Linha de crescimento com efeito de brilho */}
      <path
        d="M55 160 L105 140 L155 110 L205 80 L255 60 L305 40 L355 20"
        stroke="#FF5C00"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        filter="drop-shadow(0 0 2px #FF5C00)"
      />

      {/* Efeito de brilho adicional */}
      <circle cx="355" cy="20" r="3" fill="#FFF" fillOpacity="0.6" />
    </svg>
  )
}

export const RocketMan: React.FC<{ isFlying: boolean }> = ({ isFlying }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-2000 ease-in-out ${isFlying ? "animate-rocket-fly" : ""}`}
    >
      {/* Trajetória do foguete */}
      <path
        d="M55 160 L105 140 L155 110 L205 80 L255 60 L305 40 L355 20"
        stroke="#FF5C00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5,5"
        opacity="0.7"
      />

      {/* Foguete */}
      <g transform="rotate(60 40 60)">
        {" "}
        {/* Inclinação do foguete */}
        {/* Corpo do foguete */}
        <path d="M35 60 L50 50 L65 60 L50 65 Z" fill="#FF5C00" />
        {/* Ponta */}
        <rect x="40" y="60" width="20" height="30" fill="#FFFFFF" rx="2" />
        {/* Corpo principal */}
        <path d="M30 70 L40 80 L40 90 L30 85 Z" fill="#FF5C00" />
        {/* Asa esquerda */}
        <path d="M70 70 L60 80 L60 90 L70 85 Z" fill="#FF5C00" />
        {/* Asa direita */}
        <circle cx="50" cy="75" r="5" fill="#FF5C00" />
        {/* Janela */}
        {/* Chamas do foguete (animadas) */}
        <g className={`transition-opacity duration-500 ${isFlying ? "opacity-100" : "opacity-0"}`}>
          <path d="M45 90 L50 110 L55 90" fill="#FFD700">
            <animate
              attributeName="d"
              values="M45 90 L50 110 L55 90; M45 90 L50 105 L55 90; M45 90 L50 110 L55 90"
              dur="0.4s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M47 90 L50 105 L53 90" fill="#FF8C00">
            <animate
              attributeName="d"
              values="M47 90 L50 105 L53 90; M47 90 L50 100 L53 90; M47 90 L50 105 L53 90"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>

      {/* Símbolo "$" */}
      <text
        x="355"
        y="30"
        fill="#FF5C00"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        opacity={isFlying ? 1 : 0}
        className={`transition-opacity duration-1000 ease-in-out ${isFlying ? "opacity-100" : "opacity-0"}`}
      >
        $
      </text>

      <style>
        {`
          @keyframes rocketFly {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(0, -150px);
            }
            100% {
              transform: translate(400px, -150px);
            }
          }

          .animate-rocket-fly {
            animation: rocketFly 4s ease-in-out forwards;
          }

          /* Remova a animação do gráfico */
          .animate-chart-fly {
            animation: none;
          }
        `}
      </style>
    </svg>
  )
}

