'use strict';
/*  db is a json string, which contains:
    - an array of questions, each question has:
        - an unique id;
        - title;
        - text (the question itself);
        - a media object, each contains:
            - the type of media;
            - the file of the media;
            - xor, null;
        - an array of answers, each answer has:
            - t: a text;
            - p: the follow question on the system;
            - if p == -1, it leads to the end screen

*/
// a variavel db eh um array json de questions
// cada pergunta contem id (um identificador unico), title e texto (da pergunta)
// e um array de answers, cada uma com t (texto da alternativa) e p (proxima pergunta do sistema)
// se p == -1, a pergunta leva ao final da sequencia

var db =
'{ "questions" : [ ' +

'{"id": 0, "title": "Soma1", "text": "Qual o resultado de 5 + 5?", ' +
'"media" : {"type": "text", "file": "text.html"}, "answers": ' +
'[ {"t": "8", "p": -1}, {"t": "10","p": 1}, {"t": "4", "p": -1}, {"t": "5", "p": -1} ] }' +

',{"id": 1, "title": "Soma2", "text": "Qual o resultado de 1 + 2?", '+
'"media" : null, "answers": ' +
'[ {"t": "5", "p": -1}, {"t": "1", "p": -1}, {"t": "3", "p": 2}, {"t": "9", "p": -1} ] }' +

',{"id": 2, "title": "Soma3", "text": "Qual o resultado de 4 + 2?", '+
'"media" : {"type": "video", "file": "video.ogv"}, "answers": ' +
'[ {"t": "2", "p": -1}, {"t": "0","p": -1}, {"t": "6", "p": 3}, {"t": "3", "p": -1} ] }' +

',{"id": 3, "title": "Soma4", "text": "Qual o resultado de 0 + 2?", '+
'"media" : {"type": "audio", "file": "music.ogg"}, "answers": ' +
'[ {"t": "2", "p": 4}, {"t": "5","p": -1}, {"t": "1", "p": -1}, {"t": "7", "p": -1} ] }' +

',{"id": 4, "title": "Soma5", "text": "Qual o resultado de 1 + 7?", '+
'"media" : {"type": "image", "file": "image.jpg"}, "answers": ' +
'[ {"t": "6", "p": -1}, {"t": "8","p": -1}, {"t": "2", "p": -1}, {"t": "3", "p": -1} ] }' +

'] }'
