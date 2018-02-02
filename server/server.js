import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

//TUTORIAL: https://www.youtube.com/watch?v=DNPVqK_woRQ

//Config

const APP_PORT = 3000;

const app = Express();

app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true,
    
}));
app.use('/posts', GraphHTTP({
    schema: Schema,
    pretty: true

}));

app.listen(APP_PORT, () => {
    console.log('App listening on Port ', APP_PORT);
});