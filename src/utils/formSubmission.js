/**
 * Netlify Forms Submission Utility
 * Handles form submission with inline success/error messages
 */

/**
 * Submits a form to Netlify Forms and shows inline success/error message
 * @param {Event} event - The form submit event
 * @param {string} formName - The name of the form (e.g., 'home-contact', 'page-contact')
 * @param {Function} onSuccess - Callback function called on successful submission
 * @param {Function} onError - Callback function called on submission error
 */
export const submitToNetlify = async (event, formName, onSuccess, onError) => {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Add the form-name field for Netlify
  formData.append('form-name', formName);
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    onError();
  }
};

/**
 * Creates a success message element with proper styling
 * @param {string} message - The success message to display
 * @returns {HTMLElement} - The styled success message element
 */
export const createSuccessMessage = (message = "Thanks for your submission! We'll be in touch soon.") => {
  const successElement = document.createElement('div');
  successElement.className = 'form-success-message';
  successElement.innerHTML = `
    <div class="success-content">
      <div class="success-icon">✓</div>
      <p class="success-text">${message}</p>
    </div>
  `;
  return successElement;
};

/**
 * Creates an error message element with proper styling
 * @param {string} message - The error message to display
 * @returns {HTMLElement} - The styled error message element
 */
export const createErrorMessage = (message = "Oops, something went wrong. Please try again.") => {
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error-message';
  errorElement.innerHTML = `
    <div class="error-content">
      <div class="error-icon">⚠</div>
      <p class="error-text">${message}</p>
    </div>
  `;
  return errorElement;
};

/**
 * Replaces form content with success/error message
 * @param {HTMLElement} formElement - The form element to replace
 * @param {HTMLElement} messageElement - The message element to show
 */
export const replaceFormWithMessage = (formElement, messageElement) => {
  // Store the original form HTML for potential reset
  if (!formElement.dataset.originalHTML) {
    formElement.dataset.originalHTML = formElement.innerHTML;
  }
  
  // Replace form content with message
  formElement.innerHTML = '';
  formElement.appendChild(messageElement);
  
  // Add fade-in animation
  messageElement.style.opacity = '0';
  messageElement.style.transform = 'translateY(20px)';
  
  requestAnimationFrame(() => {
    messageElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    messageElement.style.opacity = '1';
    messageElement.style.transform = 'translateY(0)';
  });
};

/**
 * Resets form to original state (useful for testing or allowing resubmission)
 * @param {HTMLElement} formElement - The form element to reset
 */
export const resetFormToOriginal = (formElement) => {
  if (formElement.dataset.originalHTML) {
    formElement.innerHTML = formElement.dataset.originalHTML;
    // Re-attach event listeners if needed
    const submitButton = formElement.querySelector('button[type="submit"]');
    if (submitButton) {
      // Re-attach the submit handler
      formElement.addEventListener('submit', (e) => {
        submitToNetlify(e, formElement.name, 
          () => replaceFormWithMessage(formElement, createSuccessMessage()),
          () => replaceFormWithMessage(formElement, createErrorMessage())
        );
      });
    }
  }
};
