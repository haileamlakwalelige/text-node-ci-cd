import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
}
);
app.get('/api/data', (req, res) => {
    res.json({ data: [1, 2, 3, 4, 5] });
}
);
app.get('/api/user', (req, res) => {
    res.json({ user: { id: 1, name: 'John Doe' } });
}
);