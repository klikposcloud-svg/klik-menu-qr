import React, { useState } from 'react';
import { KlikOrder } from './types/sync';

export default function App() {
  const [connected, setConnected] = useState(true);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      {/* Header */}
      <header style={{
        padding: '16px 24px',
        background: '#FFFFFF',
        borderBottom: '1.5px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: '#059669',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '18px'
          }}>
            K
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 800 }}>Klik Menu QR - Pedidos en Mesa</h1>
            <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
              Ecosistema Modular Klik POS &bull; Puerto 3011
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: connected ? '#10B981' : '#EF4444'
          }}></span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: connected ? '#10B981' : '#EF4444' }}>
            {connected ? 'Sincronizado con POS Matriz' : 'Sin Conexión'}
          </span>
        </div>
      </header>

      {/* Main Dashboard / Workspace */}
      <main style={{ flex: 1, padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Klik Menu QR - Pedidos en Mesa</h2>
          <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
            Menú digital interactivo para comensales con fotos HD, personalización y auto-pedido.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginTop: '20px'
          }}>
            <div style={{
              padding: '20px',
              borderRadius: '14px',
              background: '#F1F5F9',
              border: '1px solid #CBD5E1'
            }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669' }}>ESTADO OPERATIVO</span>
              <div style={{ fontSize: '24px', fontWeight: 900, marginTop: '6px' }}>Listo / Activo</div>
              <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Canal de eventos preparado para enlace con WebSocket.</p>
            </div>

            <div style={{
              padding: '20px',
              borderRadius: '14px',
              background: '#F1F5F9',
              border: '1px solid #CBD5E1'
            }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669' }}>CONEXIÓN MATRIZ</span>
              <div style={{ fontSize: '24px', fontWeight: 900, marginTop: '6px' }}>Local-First</div>
              <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Soporte para almacenamiento local y re-sincronización.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
