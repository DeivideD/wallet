# frozen_string_literal: true

TypeFund.create([
                  { name: 'Fundos Imobiliarios', initials: 'FII' },
                  { name: 'Tesouro Direto', initials: 'TD' },
                  { name: 'Ações', initials: 'AC' }

                ])

MonetaryFund.create([
                      { name: 'BCFF11', type_fund: TypeFund.find_by(initials: 'FII'), category: 'Papel',
                        quantity: 150, entrance_price: 66.0 },
                      { name: 'ALZR11', type_fund: TypeFund.find_by(initials: 'FII'), category: 'Tijolo',
                        quantity: 10, entrance_price: 107.0 },
                      { name: 'CPTS11', type_fund: TypeFund.find_by(initials: 'FII'), category: 'Papel',
                        quantity: 140, entrance_price: 93.0 },
                      { name: 'CVVB3', type_fund: TypeFund.find_by(initials: 'AC'), category: '',
                        quantity: 100, entrance_price: 6.94 }
                    ])

Transaction.create([
                     { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), quantity: 50, price: 70.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), quantity: 10, price: 90.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), quantity: 70, price: 93.54 },
                     { monetary_fund: MonetaryFund.find_by(name: 'ALZR11'), quantity: 10, price: 110.0 },
                     { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), quantity: 20, price: 73.20 },
                     { monetary_fund: MonetaryFund.find_by(name: 'CVVB3'), quantity: 100, price: 6.94 }
                   ])

Yeld.create([
              { monetary_fund: MonetaryFund.find_by(name: 'BCFF11'), total: 30.0 },
              { monetary_fund: MonetaryFund.find_by(name: 'CPTS11'), total: 50.0 }
            ])
