const express = require('express');
const cors = require('cors');

const app = express(); // <=== ESTAVA FALTANDO ESTA LINHA!

app.use(cors());
app.use(express.json());

let agendamentos = [];

app.post('/api/agendamento', (req, res) => {
    const novoAgendamento = req.body; // Corrigi o nome da variável
    novoAgendamento.id = Date.now();
    agendamentos.push(novoAgendamento);
    res.json({ success: true, agendamento: novoAgendamento }); // Corrigi de "agendamentos" para "agendamento"
});

app.get('/api/agendamentos', (req, res) => {
    res.json(agendamentos);
});

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));