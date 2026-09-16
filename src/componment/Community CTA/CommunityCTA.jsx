import React from "react";
import { FaArrowRight, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const CommunityCTA = ({ chifslider = [] }) => {
  const chefCount = chifslider.length;

  return (
    <section className="bg-[#F5F7F2] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-[#14532D]">
          <div className="grid items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-12">

            {/* Content */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <FaUtensils className="text-sm text-white" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  BangladeshChef Community
                </span>
              </div>

              <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Have a recipe worth sharing?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Discover chefs, explore recipes, and become part of a growing
                culinary community.
              </p>

              {chefCount > 0 && (
                <p className="mt-4 text-xs font-medium text-white/45">
                  Join a community featuring {chefCount} chefs.
                </p>
              )}
            </div>

            {/* CTA */}
            <div className="lg:pr-1">
              <Link
                to="/register"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-[#14532D] transition-all duration-300 hover:bg-[#F5F7F2] hover:shadow-lg"
              >
                Join the Community
                <FaArrowRight className="text-[9px] transition-transform duration-300 hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;