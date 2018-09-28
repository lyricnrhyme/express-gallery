
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {author:'Shakespear', link:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiep4vg-tzdAhXJIDQIHbo0ABQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.mercurytheatre.co.uk%2Fevent%2Fwilliam-shakespeare-s-long-lost-first-play-abridged%2F&psig=AOvVaw3qj5Mw0SSzE194klcuOoG3&ust=1538198631019257', description:'shakespear is an effin Gee that writes smooth rhymes.'}
      ]);
    });
};
