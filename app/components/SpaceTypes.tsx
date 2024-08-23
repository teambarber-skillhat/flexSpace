import React from 'react';

const workspaceTypes = [
  { name: 'Salon', icon: '/sprite-app.svg#icon-salon' },
  { name: 'Barber Shop', icon: '/sprite-app.svg#icon-barbershop' },
  { name: 'Nail Salon', icon: '/sprite-app.svg#icon-nailsalon' },
  { name: 'Makeup Studio', icon: '/sprite-app.svg#icon-makeupstudio' },
  { name: 'Esthetics Studio', icon: '/sprite-app.svg#icon-esthetics' },
];

export default function WorkspaceTypes() {
  return (
    <div className="p-6">
      <h3 className="mb-4 text-base font-bold text-headerColor">
        Workspace Type
      </h3>
      <ul className="custom-scrollbar flex gap-4 overflow-x-auto">
        {workspaceTypes.map((workspace, index) => (
          <li
            key={index}
            className="flex min-w-[90px] flex-col items-center justify-center"
          >
            <div className="mb-2 rounded-full bg-cardBgFour p-4">
              <svg width={32} height={32}>
                <use href={workspace.icon} />
              </svg>
            </div>
            <p className="whitespace-nowrap text-[12px] font-medium">
              {workspace.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
