# frozen_string_literal: true

TypeFund.create([
                  { name: 'Fundos Imobiliarios', initials: 'FII' },
                  { name: 'Tesouro Direto', initials: 'TD' },
                  { name: 'Açoes', initials: '' }

                ])

MonetaryFund.create([
                      { name: 'BCFF11', type_fund: TypeFund.find_by(name: 'Fundos Imobiliarios'), category: 'Papel' },
                      { name: 'ALZR11', type_fund: TypeFund.find_by(name: 'Fundos Imobiliarios'), category: 'Tijolo' },
                      { name: 'CPTS11', type_fund: TypeFund.find_by(name: 'Fundos Imobiliarios'), category: 'Papel' }
                    ])

Transaction.create([
                     { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), quantity: 50, price: 70.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), quantity: 10, price: 90.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), quantity: 70, price: 93.54 },
                     { monetary_fund: MonetaryFund.find_by(name: 'ALZR11'), quantity: 10, price: 110.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), quantity: 20, price: 73.20 }
                   ])

Yeld.create([
              { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), total: 30.0 },
              { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), total: 50.0 }
            ])
