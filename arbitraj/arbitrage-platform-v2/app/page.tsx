'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Package, 
  Clock, 
  Filter, 
  ArrowUpRight, 
  Search,
  Bell,
  User,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';



export default function Dashboard() {
  const [items, setItems] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("Never");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/items');
        const data = await res.json();
        setItems(data.opportunities || []);
        setTotalCount(data.total_items || 0);
        setLastUpdate(new Date(data.last_sync).toLocaleTimeString());
      } catch (err) {
        console.error("Failed to load items");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main-content">
      <nav style={{ 
        padding: '1.5rem 2rem', 
        borderBottom: '1px solid var(--border)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'var(--bg-card)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <TrendingUp className="pulse-primary" style={{ color: 'var(--primary)' }} />
          <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Arbitrage Intelligence</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search skins..." 
              style={{ 
                background: 'var(--bg-dark)', 
                border: '1px solid var(--border)', 
                borderRadius: '8px', 
                padding: '8px 12px 8px 36px',
                color: 'white',
                width: '300px'
              }}
            />
          </div>
          <Bell size={20} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={18} color="white" />
          </div>
        </div>
      </nav>

      <main className="dashboard-container">
        <header style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Market Overview</h2>
          <p style={{ color: 'var(--text-muted)' }}>Real-time arbitrage opportunities across major platforms.</p>
        </header>

        <div className="grid-widgets">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Package size={20} color="var(--primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>+12% vs last fetch</span>
            </div>
            <div className="widget-value">{totalCount}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Total Items Tracked</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TrendingUp size={20} color="var(--success)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>Active Now</span>
            </div>
            <div className="widget-value">{items.length}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Profitable Deals</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Clock size={20} color="var(--warning)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interval: 30m</span>
            </div>
            <div className="widget-value">{lastUpdate}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Last Market Sync</div>
          </motion.div>
        </div>

        <section className="glass-card" style={{ padding: '0' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Top Arbitrage Opportunities</h3>
            <button style={{ 
              background: 'var(--glass)', 
              border: '1px solid var(--glass-border)', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>
              <Filter size={16} /> Filters
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Buy From</th>
                  <th>Sell To</th>
                  <th>Buy Price</th>
                  <th>Sell Price</th>
                  <th>Net Profit</th>
                  <th>Profit %</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <motion.tr 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <td style={{ fontWeight: 500 }}>{item.item_name}</td>
                    <td><span className={`badge badge-${item.buy_from?.toLowerCase()}`}>{item.buy_from}</span></td>
                    <td><span className={`badge badge-${item.sell_to?.toLowerCase()}`}>{item.sell_to}</span></td>
                    <td>${item.buy_price.toFixed(2)}</td>
                    <td>${item.sell_price.toFixed(2)}</td>
                    <td className="profit-text">+${item.net_profit.toFixed(2)}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '60px', height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${Math.min(item.profit_percent * 5, 100)}%`, height: '100%', background: 'var(--success)' }}></div>
                        </div>
                        <span className="profit-text">{item.profit_percent.toFixed(2)}%</span>
                      </div>
                    </td>
                    <td>
                      <button style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: 'var(--primary)', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        Trade <ArrowUpRight size={14} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View all opportunities <ChevronRight size={16} />
            </button>
          </div>
        </section>
      </main>

      <div className="sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <TrendingUp color="var(--primary)" />
          <h2 style={{ fontSize: '1.25rem' }}>A.I. Platform</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--glass)', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <TrendingUp size={20} /> Dashboard
          </div>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
            <Package size={20} /> Inventory
          </div>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
            <Clock size={20} /> History
          </div>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
            <Bell size={20} /> Notifications
          </div>
        </div>

        <div style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid var(--border)', position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--glass)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} color="var(--text-muted)" />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Next Fetch</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>in 18 minutes</div>
            </div>
          </div>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, cursor: 'pointer' }}>
            Upgrade to Pro
          </div>
        </div>
      </div>
    </div>
  );
}
