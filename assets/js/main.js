/**
 * Suresh Malli - Editorial PR Portfolio JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Active Link Tracking
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Modal Helper Functions
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  const openModal = (contentHtml) => {
    if (modalBody && modalOverlay) {
      modalBody.innerHTML = contentHtml;
      modalOverlay.classList.add('active');
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // 3. Press Kit Download Trigger
  const pressKitBtns = document.querySelectorAll('.press-kit-btn');
  pressKitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const content = `
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 12px; color: var(--text-primary);">Suresh Malli — Media & Press Kit</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">
          Includes official biography, high-resolution portrait photos, verified athletic records, Dainik Bhaskar newspaper print scans, and Lucknow University academic honors for press publication.
        </p>
        <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); padding: 15px; margin-bottom: 20px; font-size: 0.85rem;">
          <strong>Press Contact:</strong> sureshmalli.yoga@gmail.com<br>
          <strong>Official Portal:</strong> amrityogacenter.in
        </div>
        <button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.remove('active')" style="width: 100%;">
          Close Window
        </button>
      `;
      openModal(content);
    });
  });

  // 4. Contact & Inquiries Form Handler
  const inquiryForm = document.getElementById('editorialForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName').value;
      const type = document.getElementById('inputType').value;

      const successContent = `
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 12px; color: var(--text-primary);">Inquiry Submitted</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">
          Thank you, <strong>${name}</strong>. Your official inquiry regarding <em>${type}</em> has been submitted to Suresh Malli's office.
        </p>
        <button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.remove('active')" style="width: 100%;">
          Acknowledged
        </button>
      `;
      openModal(successContent);
      inquiryForm.reset();
    });
  }

  // 5. Press Section Filter Tabs
  const pressTabs = document.querySelectorAll('.press-tab-btn');
  const pressCards = document.querySelectorAll('.press-card-item');

  pressTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pressTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      pressCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-pub') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Press Scan Lightbox Handler
  const scanBoxes = document.querySelectorAll('.scan-thumbnail-box');
  scanBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const imgSrc = box.getAttribute('data-scan-img');
      const title = box.getAttribute('data-scan-title');

      const scanContent = `
        <h3 style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 12px; color: var(--text-primary);">${title}</h3>
        <div style="max-height: 70vh; overflow-y: auto; border: 1px solid var(--border-color); margin-bottom: 20px; background: #f3f4f6;">
          <img src="${imgSrc}" alt="${title}" style="width: 100%; display: block;">
        </div>
        <button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.remove('active')" style="width: 100%;">
          Close Scan Preview
        </button>
      `;
      openModal(scanContent);
    });
  });
});
