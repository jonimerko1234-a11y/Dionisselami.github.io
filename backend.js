// Backend functionality using localStorage
const Backend = {
    // Admin credentials
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'shpetimi',
    
    // Storage keys
    STORAGE_KEYS: {
        QUOTE_REQUESTS: 'srs_quote_requests',
        CONTACT_MESSAGES: 'srs_contact_messages',
        AUTH_TOKEN: 'srs_auth_token'
    },

    // Authentication
    login(username, password) {
        if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
            const token = this.generateToken();
            localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, token);
            return true;
        }
        return false;
    },

    logout() {
        localStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
    },

    isLoggedIn() {
        const token = localStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN);
        return token !== null && token.length > 0;
    },

    generateToken() {
        return btoa(Date.now() + Math.random().toString());
    },

    // Quote Requests Management
    addQuoteRequest(quoteData) {
        const quotes = this.getQuoteRequests();
        const newQuote = {
            id: this.generateId(),
            ...quoteData,
            date: new Date().toISOString()
        };
        quotes.push(newQuote);
        localStorage.setItem(this.STORAGE_KEYS.QUOTE_REQUESTS, JSON.stringify(quotes));
        return newQuote;
    },

    getQuoteRequests() {
        const data = localStorage.getItem(this.STORAGE_KEYS.QUOTE_REQUESTS);
        return data ? JSON.parse(data) : [];
    },

    deleteQuoteRequest(id) {
        const quotes = this.getQuoteRequests();
        const filtered = quotes.filter(q => q.id !== id);
        localStorage.setItem(this.STORAGE_KEYS.QUOTE_REQUESTS, JSON.stringify(filtered));
    },

    // Contact Messages Management
    addContactMessage(contactData) {
        const contacts = this.getContactMessages();
        const newContact = {
            id: this.generateId(),
            ...contactData,
            date: new Date().toISOString()
        };
        contacts.push(newContact);
        localStorage.setItem(this.STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(contacts));
        return newContact;
    },

    getContactMessages() {
        const data = localStorage.getItem(this.STORAGE_KEYS.CONTACT_MESSAGES);
        return data ? JSON.parse(data) : [];
    },

    deleteContactMessage(id) {
        const contacts = this.getContactMessages();
        const filtered = contacts.filter(c => c.id !== id);
        localStorage.setItem(this.STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(filtered));
    },

    // Utility
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Backend;
}
