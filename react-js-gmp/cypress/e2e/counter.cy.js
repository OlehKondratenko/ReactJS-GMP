describe('Counter Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders with the initial value provided in props', () => {
      cy.contains('Count: 0').should('exist');
    });
  
    it('increments the value when the "Increment" button is clicked', () => {
      cy.contains('Increment').click();
      cy.contains('Count: 1').should('exist');
    });
  
    it('decrements the value when the "Decrement" button is clicked', () => {
      cy.contains('Increment').click(); // Increase to 1
      cy.contains('Decrement').click();  // Decrease to 0
      cy.contains('Count: 0').should('exist');
    });
  
    it('handles multiple increments and decrements correctly', () => {
      for (let i = 0; i < 5; i++) {
        cy.contains('Increment').click();
      }
      cy.contains('Count: 5').should('exist');
  
      for (let i = 0; i < 3; i++) {
        cy.contains('Decrement').click();
      }
      cy.contains('Count: 2').should('exist');
    });
  });
  