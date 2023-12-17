const Users = () => {
  return (
    <div>
      <div className="flex justify-between my-8">
        <h1 className="text-gray-900 font-medium text-2xl">Users</h1>
        <div className="flex gap-3">
          <button className="py-2 px-4 border border-gray-300 rounded-md flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_20_52)">
                <path
                  d="M13.3333 13.3334L9.99997 10M9.99997 10L6.66663 13.3334M9.99997 10V17.5M16.9916 15.325C17.8044 14.8819 18.4465 14.1808 18.8165 13.3322C19.1866 12.4837 19.2635 11.5361 19.0351 10.6389C18.8068 9.74182 18.2862 8.94629 17.5555 8.3779C16.8248 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6977 6.5244 13.2276 5.61864 12.5749 4.85085C11.9222 4.08307 11.104 3.47324 10.1817 3.0672C9.25943 2.66116 8.25709 2.46949 7.25006 2.5066C6.24304 2.5437 5.25752 2.80861 4.36761 3.28142C3.47771 3.75422 2.70656 4.42261 2.11215 5.23635C1.51774 6.05008 1.11554 6.98797 0.935783 7.97952C0.756025 8.97107 0.803388 9.99047 1.07431 10.9611C1.34523 11.9317 1.83267 12.8282 2.49997 13.5834"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_52">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Import
          </button>
          <button className="py-2 px-4 bg-brand-600 text-gray-100 rounded-md flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99996 4.16663V15.8333M4.16663 9.99996H15.8333"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;