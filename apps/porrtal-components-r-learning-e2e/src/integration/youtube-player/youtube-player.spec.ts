describe('porrtal-components-r-learning: YoutubePlayer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=youtubeplayer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to YoutubePlayer!');
    });
});
