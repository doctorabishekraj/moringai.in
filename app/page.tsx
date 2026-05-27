import React from 'react';

export default function MurungaiStore() {
  return (
    <div style={{ backgroundColor: '#1B4332', minHeight: '100vh', color: 'white', fontFamily: 'serif' }}>
      
      {/* HEADER */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D4AF37', alignItems: 'center' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '32px', letterSpacing: '2px', margin: 0 }}>ASVIA</h1>
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          <span>THE SCIENCE</span>
          <span style={{ color: '#D4AF37' }}>+91 95144 99924</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ textAlign: 'center', padding: '100px 20px' }}>
        <p style={{ color: '#D4AF37', letterSpacing: '5px', fontSize: '14px', fontWeight: 'bold' }}>PREMIUM MORINGA BIO-SCIENCE</p>
        <h2 style={{ fontSize: '60px', marginTop: '20px', lineHeight: '1.1' }}>Murungai.in <br/> Green Gold</h2>
        <p style={{ maxWidth: '600px', margin: '30px auto', color: '#a0c4b5', fontSize: '18px' }}>
          Sustainably sourced from Tamil Nadu. AI-verified purity. Delivered to your door.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/9514499924?text=Hi%20Asvia%2C%20I%20want%20to%20order%20Moringa%20from%20Murungai.in', '_blank')}
          style={{ backgroundColor: '#D4AF37', color: '#1B4332', padding: '18px 50px', borderRadius: '40px', border: 'none', fontSize: '20px', fontWeight: '900', marginTop: '20px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
        >
          ORDER ON WHATSAPP
        </button>
      </header>

      {/* PRODUCTS */}
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', padding: '20px' }}>
         <div style={{ background: 'white', color: '#1B4332', padding: '25px', borderRadius: '30px', width: '300px', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400" style={{width: '100%', borderRadius: '20px'}} alt="Murungai Powder" />
            <h3 style={{marginTop: '15px'}}>Organic Powder</h3>
            <p style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '24px' }}>₹999.00</p>
            <button style={{ background: '#1B4332', color: 'white', border: 'none', width: '100%', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Buy Now</button>
         </div>
         
         <div style={{ background: 'white', color: '#1B4332', padding: '25px', borderRadius: '30px', width: '300px', textAlign: 'center', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '15px', right: '15px', background: 'red', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>LOW STOCK ALERT</span>
            <img src="https://images.unsplash.com/photo-1611073221761-8bc110b10f8a?auto=format&fit=crop&w=400" style={{width: '100%', borderRadius: '20px'}} alt="Murungai Oil" />
            <h3 style={{marginTop: '15px'}}>Premium Elixir Oil</h3>
            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>₹1,499.00</p>
            <button style={{ background: '#1B4332', color: 'white', border: 'none', width: '100%', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Buy Now</button>
         </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#D4AF37', fontSize: '12px' }}>
         © 2024 ASVIA | MURUNGAI.IN | POWERED BY AI
      </footer>
    </div>
  );
}
