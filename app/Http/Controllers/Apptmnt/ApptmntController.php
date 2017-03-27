<?php

namespace App\Http\Controllers\Apptmnt;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Traits\Apptmnt;

class ApptmntController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Appointment Manager Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the appointments
    |
    */

    use Apptmnt;

    /**
     *
     * Create a new controller instance.
     *
     * ApptmntController constructor.
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function index() {
        return view('apptmnt');
    }

    /**
     * Get a validator for an incoming appointment request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
        ]);
    }

    /**
     * Create a new appointment
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
    }
}
