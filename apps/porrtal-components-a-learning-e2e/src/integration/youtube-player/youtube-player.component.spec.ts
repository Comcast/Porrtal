describe('porrtal-components-a-learning', () => {
  beforeEach(() => cy.visit('/iframe.html?id=youtubeplayercomponent--primary&args=viewState;'));
  it('should render the component', () => {
    cy.get('porrtal-workspace-youtube-player').should('exist');
  });
});