import { useEffect, useState } from "react";
import { useGetUsersByPageQuery } from "../../service/usersService";
interface userInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  checked?: boolean;
}
interface usersInterface extends Array<userInterface> {
  length: number;
}

interface Users {
  page: number;
  total_pages: number;
  data: userInterface[];
}
const Users = () => {
  const [users, setUsers] = useState<usersInterface>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [globalCheckbox, setGlobalCheckbox] = useState(false);
  const { data, error } = useGetUsersByPageQuery(currentPage);

  useEffect(() => {
    if (data && !error) {
      setUsers(data.data);
      setTotalPages(data.total_pages);
      setCurrentPage(data.page);
    }
  }, [data, error]);

  const toggleAllCheckboxes = () => {
    setUsers(
      users.map((user) => {
        return {
          ...user,
          checked: !globalCheckbox,
        };
      })
    );
  };

  useEffect(() => {
    setGlobalCheckbox(
      users.find((user) => user.checked === true) ? true : false
    );
  }, [users]);

  return (
    <div className="mb-40">
      <div className="flex justify-between my-8">
        <h1 className="text-gray-900 font-medium text-2xl">Users</h1>
        <div className="flex gap-3">
          <button className="py-2 px-4 border border-gray-300 rounded-md flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_20_52)">
                <path
                  d="M13.3333 13.3334L9.99997 10M9.99997 10L6.66663 13.3334M9.99997 10V17.5M16.9916 15.325C17.8044 14.8819 18.4465 14.1808 18.8165 13.3322C19.1866 12.4837 19.2635 11.5361 19.0351 10.6389C18.8068 9.74182 18.2862 8.94629 17.5555 8.3779C16.8248 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6977 6.5244 13.2276 5.61864 12.5749 4.85085C11.9222 4.08307 11.104 3.47324 10.1817 3.0672C9.25943 2.66116 8.25709 2.46949 7.25006 2.5066C6.24304 2.5437 5.25752 2.80861 4.36761 3.28142C3.47771 3.75422 2.70656 4.42261 2.11215 5.23635C1.51774 6.05008 1.11554 6.98797 0.935783 7.97952C0.756025 8.97107 0.803388 9.99047 1.07431 10.9611C1.34523 11.9317 1.83267 12.8282 2.49997 13.5834"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <button className="py-2 px-4 bg-brand-600 text-gray-100 rounded-md flex gap-1 items-center">
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
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add User
          </button>
        </div>
      </div>
      <div>
        <table className="w-full shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.06)]">
          <thead className="">
            <tr className="flex bg-brand-50 rounded-tl-lg rounded-tr-lg border border-gray-200">
              <th className="flex-[1_0_0]">
                <div className="flex items-center gap-3 px-6 py-3">
                  <label className="relative cursor-pointer h-5 w-5">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="opacity-0 absolute cursor-pointer h-0 w-0 peer"
                      onClick={toggleAllCheckboxes}
                      checked={globalCheckbox}
                    />
                    <span className="absolute top-0 left-0 h-5 w-5 bg-white border border-gray-300 rounded-md peer-checked:bg-gray-50 peer-checked:border peer-checked:border-brand-600 after:content after:hidden peer-checked:after:block after:absolute after:left-[3px] after:top-[8px] after:w-[12px] after:h-[2px] after:border after:border-brand-600 after:border-t-0 after:border-r-2 after:border-b-2 after:border-l-0"></span>
                  </label>
                  <span className="font-medium text-xs">User Info</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 3.33337V12.6667M8 12.6667L12.6667 8.00004M8 12.6667L3.33333 8.00004"
                      stroke="#667085"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th className="flex-[1_0_0]">
                <div className="flex items-center justify-start px-6 py-3">
                  <span className="font-medium text-xs">About</span>
                </div>
              </th>
              <th className="flex-[0_0_220px]">
                <div className="flex items-center justify-start px-6 py-3">
                  <span className="font-medium text-xs">Status</span>
                </div>
              </th>
              <th className="flex-[0_0_100px]"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                className="flex justify-between py-3 border border-t-0 border-gray-200"
                key={user.id}
              >
                <td className="flex items-center gap-3 px-6 flex-[1_0_0]">
                  <label className="relative cursor-pointer h-5 w-5">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="opacity-0 absolute cursor-pointer h-0 w-0 peer"
                      checked={user.checked}
                      onChange={() => {
                        setUsers(
                          users.map((u) => {
                            if (u.id === user.id) {
                              return {
                                ...u,
                                checked: !u.checked,
                              };
                            }
                            return u;
                          })
                        );
                      }}
                    />
                    <span className="absolute top-0 left-0 h-5 w-5 bg-white border border-gray-300 rounded-md peer-checked:bg-gray-50 peer-checked:border peer-checked:border-brand-600 after:content after:hidden peer-checked:after:block after:absolute after:left-[6px] after:top-[3px] after:w-[6px] after:h-[10px] after:border after:border-brand-600 after:border-t-0 after:border-r-2 after:border-b-2 after:border-l-0 after:rotate-45"></span>
                  </label>
                  <img src={user.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <h6 className="text-sm font-medium text-gray-900">
                      {user.first_name} {user.last_name}
                    </h6>
                    <span className="text-sm font-normal text-gray-500">
                      {user.email}
                    </span>
                  </div>
                </td>
                <td className=" px-6 flex-[1_0_0]">
                  <div className="flex flex-col">
                    <span className="text-sm font-normal text-gray-900">
                      Some dummy Content
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      Brings all your news into one place
                    </span>
                  </div>
                </td>
                <td className="flex items-center px-6 flex-[0_0_220px]">
                  <div className="inline-block bg-green-50 text-green-700 rounded-full py-0.5 px-3 font-medium text-sm">
                    Random Sticker Level
                  </div>
                </td>
                <td className="flex-[0_0_100px] flex items-center">
                  <div className="p-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                        stroke="#667085"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="p-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_39_137)">
                        <path
                          d="M14.1666 2.50005C14.3855 2.28118 14.6453 2.10756 14.9313 1.98911C15.2173 1.87066 15.5238 1.80969 15.8333 1.80969C16.1428 1.80969 16.4493 1.87066 16.7353 1.98911C17.0213 2.10756 17.2811 2.28118 17.5 2.50005C17.7188 2.71892 17.8924 2.97875 18.0109 3.26472C18.1294 3.55069 18.1903 3.85719 18.1903 4.16671C18.1903 4.47624 18.1294 4.78274 18.0109 5.06871C17.8924 5.35468 17.7188 5.61451 17.5 5.83338L6.24996 17.0834L1.66663 18.3334L2.91663 13.75L14.1666 2.50005Z"
                          stroke="#667085"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_39_137">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="px-6 py-3 flex justify-between items-center border border-t-0 border-gray-200 rounded-bl-lg rounded-br-lg">
            <button
              className="py-2 px-4 border border-gray-300 rounded-md"
              onClick={setCurrentPage.bind(this, currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <button
              className="py-2 px-4 border border-gray-300 rounded-md"
              onClick={setCurrentPage.bind(this, currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Users;
