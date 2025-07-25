import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Plan Básico",
    price: "$2.99",
    description: "Perfecto para empezar",
    features: [
      "Calidad HD (720p)",
      "1 pantalla simultánea",
      "Catálogo completo",
      "Sin anuncios",
      "Descargas limitadas"
    ],
    popular: false
  },
  {
    id: "standard",
    name: "Plan Estándar",
    price: "$5.99",
    description: "Ideal para familias",
    features: [
      "Calidad Full HD (1080p)",
      "2 pantallas simultáneas",
      "Catálogo completo",
      "Sin anuncios",
      "Descargas ilimitadas",
      "Perfiles familiares"
    ],
    popular: true
  },
  {
    id: "premium",
    name: "Plan Premium",
    price: "$9.99",
    description: "La mejor experiencia",
    features: [
      "Calidad 4K + HDR",
      "4 pantallas simultáneas",
      "Catálogo completo + Exclusivos",
      "Sin anuncios",
      "Descargas ilimitadas",
      "Perfiles familiares",
      "Audio espacial",
      "Acceso anticipado"
    ],
    popular: false
  }
];

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-primary/20 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Elige tu plan perfecto
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disfruta de contenido ilimitado en todos tus dispositivos. 
            Cancela cuando quieras, sin compromiso.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                  size="lg"
                >
                  {plan.popular ? 'Comenzar ahora' : 'Elegir plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Features comparison */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Compara todos los planes
          </h2>
          
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-foreground font-semibold">Características</th>
                    <th className="text-center p-4 text-foreground font-semibold">Básico</th>
                    <th className="text-center p-4 text-foreground font-semibold">Estándar</th>
                    <th className="text-center p-4 text-foreground font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 text-muted-foreground">Precio mensual</td>
                    <td className="text-center p-4 text-foreground font-semibold">$2.99</td>
                    <td className="text-center p-4 text-foreground font-semibold">$5.99</td>
                    <td className="text-center p-4 text-foreground font-semibold">$9.99</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 text-muted-foreground">Calidad de video</td>
                    <td className="text-center p-4 text-foreground">HD (720p)</td>
                    <td className="text-center p-4 text-foreground">Full HD (1080p)</td>
                    <td className="text-center p-4 text-foreground">4K + HDR</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-muted-foreground">Pantallas simultáneas</td>
                    <td className="text-center p-4 text-foreground">1</td>
                    <td className="text-center p-4 text-foreground">2</td>
                    <td className="text-center p-4 text-foreground">4</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 text-muted-foreground">Descargas</td>
                    <td className="text-center p-4 text-foreground">Limitadas</td>
                    <td className="text-center p-4 text-foreground">Ilimitadas</td>
                    <td className="text-center p-4 text-foreground">Ilimitadas</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-muted-foreground">Perfiles familiares</td>
                    <td className="text-center p-4 text-muted-foreground">✗</td>
                    <td className="text-center p-4 text-primary">✓</td>
                    <td className="text-center p-4 text-primary">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}