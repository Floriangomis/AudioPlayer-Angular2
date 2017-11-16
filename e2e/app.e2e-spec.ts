import { PlayerComponentPage } from './app.po';

describe('player-component App', function() {
  let page: PlayerComponentPage;

  beforeEach(() => {
    page = new PlayerComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
