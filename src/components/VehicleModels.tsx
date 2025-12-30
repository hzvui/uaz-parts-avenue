import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";

const VehicleModels = () => {
  return (
    <section className="py-8 bg-primary">
      <div className="container">
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary-foreground mb-2">
            Присоединяйтесь!
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Вступайте к нам в группу и узнавайте первыми все акции и предложения!
          </p>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.073 2H8.937C3.333 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.937C22 3.333 20.677 2 15.073 2zM18.9 16.967c-.2.5-.717.9-1.317 1.017-.083.017-.167.033-.267.05-.833.133-2.267.033-4.033-1.167l-.267-.183c-.85-.617-1.567-1.383-2.083-2.217-.017-.017-.033-.05-.05-.067a11.03 11.03 0 01-.667-1.05c-.167-.3-.067-.617.2-.817l.533-.383c.267-.2.383-.567.283-.883l-.85-2.667c-.1-.317-.4-.533-.733-.517h-.85c-.35.017-.683.183-.917.45-.767.883-.95 2.033-.5 3.117.95 2.267 2.517 4.35 4.55 5.933 1.05.817 2.45 1.517 3.7 1.767.433.083.883.117 1.333.05.55-.083 1.067-.333 1.433-.733.267-.3.4-.683.383-1.083v-.633c-.017-.35-.267-.65-.617-.75l-2.067-.65c-.35-.1-.733 0-.983.283l-.35.383c-.183.2-.467.283-.717.2z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15c-1.47 0-2.91-.4-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.68 8.22-8.25 8.22z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
