import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { MainContainer, Title, TipsContainer, TipCard } from "./styles";
import Header from "../../components/Header";

const Tipes = () => {
  const { consumption } = useContext(UserContext);

  const tips = [
    {
      id: 1,
      text: "Adote a compostagem para transformar restos de alimentos em adubo para suas plantas.",
      condition: consumption.some(item => item.type === "alimentos") && consumption.some(item => Number(item.quantity) > 20), // Exemplo: Se o consumo de alimentos for alto
    },
    {
      id: 2,
      text: "Priorize o consumo de produtos orgânicos e de produção local, apoiando a agricultura sustentável.",
      condition: consumption.some(item => item.type === "alimentos") && consumption.some(item => Number(item.quantity) > 50), // Exemplo: Se o consumo de alimentos for muito alto
    },
    {
      id: 3,
      text: "Diminua o uso de plástico, substituindo embalagens descartáveis por opções reutilizáveis.",
      condition: consumption.some(item => item.type === "produtos") && consumption.some(item => Number(item.quantity) > 10), // Exemplo: Se o consumo de produtos for alto
    },
    {
      id: 4,
      text: "Desligue os aparelhos eletrônicos da tomada quando não estiverem em uso para evitar o consumo de energia em modo stand-by.",
      condition: consumption.some(item => item.type === "energia") && consumption.some(item => Number(item.quantity) > 30), // Exemplo: Se o consumo de energia for alto
    },
    {
      id: 5,
      text: "Economize água ao lavar a roupa, utilizando a quantidade adequada de sabão e programas de lavagem mais curtos.",
      condition: consumption.some(item => item.type === "agua") && consumption.some(item => Number(item.quantity) > 80), // Exemplo: Se o consumo de água for alto
    },
    {
      id: 6,
      text: "Opte por meios de transporte mais sustentáveis, como bicicleta, transporte público ou carona.",
      condition: consumption.some(item => item.type === "transporte") && consumption.some(item => Number(item.quantity) > 20), // Exemplo: Se o consumo de transporte for alto
    },
    {
      id: 7,
      text: "Faça a compostagem de resíduos orgânicos para reduzir o volume de lixo e gerar adubo para plantas.",
      condition: true, // Dica sempre relevante
    },
    {
      id: 8,
      text: "Planeje suas refeições para evitar o desperdício de alimentos e economizar dinheiro.",
      condition: true, // Dica sempre relevante
    },
    {
      id: 9,
      text: "Apoie empresas que adotam práticas sustentáveis em sua produção e cadeia de suprimentos.",
      condition: true, // Dica sempre relevante
    },
    {
      id: 10,
      text: "Plante árvores e contribua para a preservação do meio ambiente.",
      condition: true, // Dica sempre relevante
    },
  ];

  const relevantTips = tips.filter(tip => tip.condition);

  return (
    <>
      <Header />
      <MainContainer>
        <Title>Dicas Sustentáveis:</Title>

        <TipsContainer>
          {relevantTips.length > 0 ? (
            relevantTips.map(tip => (
              <TipCard key={tip.id}>
                <p>{tip.text}</p>
              </TipCard>
            ))
          ) : (
            <p>Sem dicas personalizadas no momento. Continue registrando seu consumo para mais sugestões!</p>
          )}
        </TipsContainer>
      </MainContainer>
    </>
  );
};

export default Tipes;