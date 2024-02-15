// ==UserScript==
// @name         Módulos e Agendas EADTEC ( Desenvolvimento de Sistemas )
// @namespace    https://www.linkedin.com/in/edufgimenez/
// @version      1.0
// @description  Cria acesso rápido via links para todos os módulos e agendas do curso de Desenvolvimento de Sistemas ( Módulos 1,2 e 3)
// @author       Eduardo Gimenez
// @match        https://eadtec.cps.sp.gov.br/*
// @exclude      https://eadtec.cps.sp.gov.br/index.php*
// @exclude      https://eadtec.cps.sp.gov.br/atividades*
// @exclude      https://eadtec.cps.sp.gov.br/bate_papo*
// @exclude      https://eadtec.cps.sp.gov.br/mostraaula.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Função para criar um elemento de link
    function createLink(text, url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.style.fontSize = '12px';
        link.style.color = 'blue';
        link.style.borderBottom = '1px solid black';
        return link;
    }

    // Função para adicionar um bloco de módulo com título e links
    function addModule(title, agendas) {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module'; // Adicionando classe CSS para estilização
        moduleDiv.style.padding = '2px';
        moduleDiv.style.marginBottom = '20px';
        moduleDiv.style.border = '1px solid black';

        const titleElement = document.createElement('h1');
        titleElement.textContent = title;
        titleElement.style.marginBottom = '10px';
        titleElement.style.color = 'green';
        //titleElement.style.fontSize = '10px';
        moduleDiv.appendChild(titleElement);

        agendas.forEach(agenda => {
            const link = createLink(agenda.text, agenda.url);
            moduleDiv.appendChild(link);
            moduleDiv.appendChild(document.createElement('br')); // Adicionando quebra de linha entre os links
        });

        return moduleDiv;
    }

    // Função principal para adicionar os módulos na página
    function addModules() {
        const modulesData = {
            'Modulo 1 DS': [
                { text: '1 Raciocinando a Lógica', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=796' },
                { text: '2 Desenvolvendo a Lógica', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=797' },
                { text: '3 Lógica aplicada em Java', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=798' },
                { text: '4 Comandos de In/Out', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1255' },
                { text: '5 Estruturas de Decisão I', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=799' },
                { text: '6 Estruturas de Decisão II', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=800' },
                { text: '7 Estruturas de Repetição I', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=801' },
                { text: '8 Estruturas de Repetição II', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=802' },
                { text: '9  Vetores', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=803' },
                { text: '10 Matrizes', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=804' },
                { text: '11 HTML 5', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=805' },
                { text: '12 HTML 5 (Programando)', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=806' },
                { text: '13 CSS', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=807' },
                { text: '14 FRAMEWORK W3.CSS', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=808' },
                { text: '15 PROJETO COMPLETO', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=809' },
                { text: '16 JAVASCRIPT', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=810' },
                { text: '17 JQUERY', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=811' }
            ],
            'Modulo 1 Comunicação': [
                { text: '1 Estudo da Linguagem', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=672' },
                { text: '2 Prática de Linguagem', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=684' },
                { text: '3 Produção de Textos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=685' },
                { text: '4 Redação Técnica', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=686' },
                { text: '5 Textos Técnicos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=704' },
                { text: '6 Relatórios', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=705' },
                { text: '7 Relatório de TCC', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=706' },
                { text: '8 Apresentação Oral', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=707' }
            ],
            'Modulo 1 T.I': [
                { text: '1 Hardware', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=713' },
                { text: '2 Software', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=714' },
                { text: '3 S.O modo texto', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=715' },
                { text: '4 Noções básicas de design', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=716' },
                { text: '5 PHOTOSHOP (Básico)', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=717' },
                { text: '6 PHOTOSHOP (Básico II)', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=718' },
                { text: '7 Identidade visual e logotipo', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=719' },
                { text: '8 Introdução A. de Sistemas', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=720' },
                { text: '9 Metodologia Ágil', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=721' },
                { text: '10 Metodologia Ágil - Scrum', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=722' },
                { text: '11 Modelagem de Dados OO', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=723' },
                { text: '12 M.D Diagrama de Classe', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=724' },
                { text: '13 Intro a Banco de Dados', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=725' },
                { text: '14 Modelagem de BD', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=726' },
                { text: '15 Modelo lógico e SQL', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=727' },
                { text: '16 BD - Normalização', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=728' },

            ],
            'Modulo 2 DS': [
                { text: '1 PHP: Intro', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1043' },
                { text: '2 Variaveis & (GET/POST)', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1044' },
                { text: '3 Estrutura de Decisão', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1045' },
                { text: '4 Estruturas de Repetição/Func', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1053' },
                { text: '5 PHP: Arrays', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1101' },
                { text: '6 Persistência de dados MySQLi', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1159' },
                { text: '7 Persistência de dados PDO', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1162' },
                { text: '8 Imp arq, var sessão, cookies', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1168' },
                { text: '9 Kodular Dev Mobile', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1024' },
                { text: '10 Layout e Estrutura Kodular', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1025' },
                { text: '11 Layout do proj, splash, img', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1031' },
                { text: '12 Layout no Projeto', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1036' },
                { text: '13 Dev de jogos Kodular', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1040' },
                { text: '14 Tec. programação Kodular', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1173' },
                { text: '15 Notificações (Mobile)', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1174' },
                { text: '16 Personalizando botões', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1190' }
            ],
            'Modulo 2 Inglês': [
                { text: '1 How are you?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=976' },
                { text: '2 Where are you from?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=977' },
                { text: '3 What happened?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=978' },
                { text: '4 Where am I?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=979' },
                { text: '5 Is it your birthday?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=981' },
                { text: '6 What will we do?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=985' },
                { text: '7 What are they playing?', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1010' },
                { text: '8 Tell about yourself', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1011' }
            ],
            'Modulo 2 T.I': [
                { text: '1 BD SQL ANSI', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=939' },
                { text: '2 BD Implementação de BD', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=940' },
                { text: '3 Comandos SQL e DDL', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=941' },
                { text: '4 Ling manip. de dados DML', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=942' },
                { text: '5 Ling consulta de dados DQL ', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=943' },
                { text: '6 Redes de computadores', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=945' },
                { text: '7 Protocolos Modelos de Ref', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=946' },
                { text: '8 Endereçamento de Redes', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=947' }
            ],
            'Modulo 2 PTCC': [
                { text: '1 Planejamento TCC Met. Agil', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=949' },
                { text: '2 Estrut. modelo de negócios', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=950' },
                { text: '3 Model Canvas: diver. e fluxos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=951' },
                { text: '4 Diagrama de Caso de Uso', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=952' },
                { text: '5 UML - Diagrama de classes', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=953' },
                { text: '6 Planejamento sprints events', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=954' },
                { text: '7 Planejamento sprints reuniões', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=955' },
                { text: '8 Trello gerenciamento', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=956' }
            ],
            'Modulo 3 DS': [
                { text: '1 Audio e atrib Oneclick', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1220' },
                { text: '2 Compartilhar Fotos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1221' },
                { text: '3 Manip. BD local', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1222' },
                { text: '4 Consumindo API', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1223' },
                { text: '5 Permissões', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1226' },
                { text: '6 Widgets', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1227' },
                { text: '7 Sensores', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1228' },
                { text: '8 Localização', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1229' },
                { text: '9 PHP Orientado a Objeto', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1215' },
                { text: '10 Model View Controller', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1216' },
                { text: '11 Proj compl Camada Model', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1217' },
                { text: '12 Proj compl Cam View', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1233' },
                { text: '13 Proj compl Cam Controller', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1234' },
                { text: '14 Mod Admin Atualização MVC', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1235' },
                { text: '15 Cripto dados PHP', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1236' },
                { text: '16 Web Services Gratuitos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1237' }
            ],
            'Modulo 3 T.I': [
                { text: '1 BD consul Estrut', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1192' },
                { text: '2 BD Funções', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1193' },
                { text: '3 BD Gatilhos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1194' },
                { text: '4 BD Visões e Permissões', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1195' },
                { text: '5 Conceito Segurança Info', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1212' },
                { text: '6 Segurança rede e mobile', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1213' },
                { text: '7 Vulnerabilidades', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1214' },
                { text: '8 Qualidade de Software', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1274' },
                { text: '9 Testes de Software', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1277' },
                { text: '10 Arduino apresentação', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1288' },
                { text: '11 Arduino chaveamento', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1289' },
                { text: '12 Arduino sensores', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1290' },
                { text: '13 Arduino motores', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1291' }
            ],
            'Modulo 3 Ética': [
                { text: '1 Sobre ética', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1204' },
                { text: '2 Plagio e direitos', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1205' },
                { text: '3 Combatendo pirataria', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1206' },
                { text: '4 Cyberbullying', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1207' },
                { text: '5 Trabalho/Trabalhor/Cidadania', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1208' },
                { text: '6 Realidade/ideário/utopia', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1209' },
                { text: '7 Imigração - Contemporâneo', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1210' },
                { text: '8 Sustentabilidade T.I verde', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1211' }
            ],
            'Modulo 3 TCC': [
                { text: '1 Orientações iniciais', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1196' },
                { text: '2 Introdução', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1197' },
                { text: '3 Desenvolvimento Metodologia', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1198' },
                { text: '4 Desenvol BD e Implem.', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1199' },
                { text: '5 Des. Implem sprints', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1200' },
                { text: '6 Des. Implem sprints II', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1201' },
                { text: '7 Des. Eleme pré/pós textuais', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1202' },
                { text: '8 Finalização e Envio', url: 'https://eadtec.cps.sp.gov.br/cenario.php?id_aula=1203' },
            ],
        };
        // Cria o elemento para os modulos do primeiro semestre
        const module1Container = document.createElement('div');
        module1Container.className = 'module-container';
        module1Container.style.position = 'absolute';
        module1Container.style.top = '20px';
        module1Container.style.right = '20px';
        module1Container.style.display = 'grid';
        module1Container.style.gridTemplateColumns = 'repeat(3, 1fr)';
        module1Container.style.gap = '14px';
        // Cria o elemento para os modulos do segundo e terceiro semestre ( foi necessário separar pois o container muda para 4x4 e não mais 3x3)
        const otherModulesContainer = document.createElement('div');
        otherModulesContainer.className = 'module-container';
        otherModulesContainer.style.position = 'absolute';
        otherModulesContainer.style.top = '340px'; // O top tem que ser distante para não ficar em cima do modulo 1
        otherModulesContainer.style.right = '20px';
        otherModulesContainer.style.display = 'grid';
        otherModulesContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        otherModulesContainer.style.gap = '4px';

        Object.entries(modulesData).forEach(([title, links]) => {
            const module = addModule(title, links);
            if (title.includes('Modulo 1')) {
                module1Container.appendChild(module);
            } else {
                otherModulesContainer.appendChild(module);
            }
        });

        // Adicionando os contêineres à página
        document.body.appendChild(module1Container);
        document.body.appendChild(otherModulesContainer);
    }

    // Adicionar os módulos quando a página estiver carregada
    window.addEventListener('load', addModules);

})();
