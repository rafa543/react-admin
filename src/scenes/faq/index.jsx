import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Página de perguntas frequentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Uma Pergunta Importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O que realmente significa ter sucesso na vida? É apenas alcançar
            metas materiais ou envolve também a realização pessoal e a
            felicidade?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Outra Pergunta Essencial
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Como podemos encontrar um equilíbrio entre trabalho e vida pessoal
            em um mundo tão acelerado? Quais estratégias têm funcionado para
            você?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Sua Pergunta Favorita
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O que você considera mais valioso: o tempo ou o dinheiro? Como essa
            visão molda suas decisões diárias?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Uma Pergunta Aleatória
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se você pudesse viajar para qualquer lugar do mundo, para onde iria
            e por quê? O que espera descobrir nessa jornada?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Pergunta Final
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qual legado você gostaria de deixar para as próximas gerações? O que
            considera essencial para a construção de um mundo melhor?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
