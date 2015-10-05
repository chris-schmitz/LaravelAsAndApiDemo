<?php

namespace App\Exceptions;

class FormValidationException extends \Exception
{
    protected $validationErrors;

    public function __construct($validationErrors, $message = null, $code = null, $previous = null)
    {
        $this->validationErrors = $validationErrors;
        parent::__construct($message, $code, $previous);
    }

    public function getValidationErrors()
    {
        return $this->validationErrors;
    }
}
